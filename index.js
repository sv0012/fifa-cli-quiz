var readlineSync = require("readline-sync");

var score = 0;
var user;

var highestScores = [
  {
    name: "Sailesh",
    score: 5,
  },

  {
    name: "Praveen",
    score: 3,
  },
];

var questionAndAnswers = [
  {
    q: "Which year did the FIFA world cup start? ",
    ans: "1930"
  },
  {
    q: "Which country has won the most number of FIFA world cups? ",
    ans: "Brazil"
  },
  {
    q: "Which country won the FIFA world cup in 2018? ",
    ans: "France"
  },
  {
    q: "Which country is the host of FIFA world cup 2022? ",
    ans: "Qatar"
  },
  {
    q: "Which year did Argentina last win the FIFA world cup final? ",
    ans: "1986"
  },
]

function welcome() {
  user = readlineSync.question("Hey There, What is your name? ");
  console.log('Welcome ' + user + ' Lets see how much you know about the FIFA World Cup!!! ')
}

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    score++;
    console.log('Yay ' + user + ', You got this answer right!')
  }
  else {
    console.log('You got this answer wrong,Better luck on the next one!!!')
  }

  console.log("current score: ", score);
  console.log("********************")
}

function fifaGame() {
  for (let i = 0; i < questionAndAnswers.length; i++) {
    play(questionAndAnswers[i].q, questionAndAnswers[i].ans)
  }
}

function displayScore() {
  if (score <= (questionAndAnswers.length / 2)) {
    console.log('Hey ' + user + '! Your score is:' + score + ' .Better luck next time champ!');
  }
  else {
    console.log('Congrats ' + user + '! Your score is:' + score + '. You are the man!!! ')
  }

  console.log('Highest Scores')
  highestScores.map((value) => {
    console.log('Name: ' + value.name);
    console.log('Score: ' + value.score);

  })
  console.log("Check out the highest scores and if you should be there reach out to me and i'll update it.");
}

welcome();
fifaGame();
displayScore();