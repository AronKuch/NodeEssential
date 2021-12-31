let questions = [
  "What is your name?",
  "What is your favourite colour?",
  "What is the airspeed velocity of an unladened swallow?",
];

const ask = () => {
  process.stdout.write(`\n${questions[answers.length]} \n`);
  process.stdout.write(">  ");
  process.stdin.on("data", (data) => {
    answers.push(data.toString().trim());
    if (answers.length < questions.length) {
      ask();
    } else {
      process.exit();
    }
  });
};

let answers = [];

// questions.forEach((item, i) => {
//   ask(i);
// });
// ask(0);

// while (answers.length < questions.length) {
//   ask(answers.length);
// }

ask();
