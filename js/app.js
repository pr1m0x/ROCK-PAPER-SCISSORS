/* globals */
// ========================
// Variables
// ========================
const interface = document.querySelector(".interface");
const button = document.querySelector(".btn");
const roundCounter_span = document.querySelector(".interface__rounds--round");
const cpuChoice_p = document.querySelector(".interface__description--round");
const score_span = document.querySelector(".interface__userScore-score");
const cpuScore_span = document.querySelector(
  ".interface__computerScore--score"
);
const resultsRounds_span = document.querySelector(
  ".interface__results--rounds"
);
const resultsResult_span = document.querySelector(
  ".interface__results--result"
);
const resultBox_div = document.querySelector(".resultBox");
const resultMessage_h1 = document.querySelector(".resultBox__message");
const boxScissors = document.querySelector(".box__scissors");
const boxPaper = document.querySelector(".box__paper");
const boxRock = document.querySelector(".box__rock");

// ========================
// Functions
// ========================

function computersChoice() {
  const possibleChoices = ["r", "p", "s"];
  const randomNumb = Math.floor(Math.random() * possibleChoices.length);
  return possibleChoices[randomNumb];
}

function updater(roundCount, userScores, cpuScores, result, cpuChoice) {
  roundCounter_span.innerHTML = roundCount;
  score_span.innerHTML = userScores;
  cpuScore_span.innerHTML = cpuScores;
  resultsRounds_span.innerHTML = roundCount;
  resultsResult_span.innerHTML = result;
  cpuChoice_p.innerHTML = `The computer chose <span style="font-weight: 700">${cpuChoice}</span>`;
  if (userScores === 5) {
    resultBox_div.style.display = "grid";
    document.body.style.backgroundColor = "#bcff00";
    resultMessage_h1.innerHTML = "🔥Yeeeeej ... You won!";
    interface.style.display = "none";
  } else if (cpuScores === 5) {
    resultBox_div.style.display = "grid";
    document.body.style.backgroundColor = "#e03131";
    resultMessage_h1.innerHTML = "💀You lost, try again!";
    interface.style.display = "none";
  }
}

function game() {
  let rounds = 0;
  let userScore = 0;
  let cpuScore = 0;
  let roundResult = "";
  boxScissors.addEventListener("click", eO => {
    const combination = "s" + computersChoice();
    switch (combination) {
      case "sp":
        roundResult = "You win!";
        rounds++;
        userScore++;
        updater(rounds, userScore, cpuScore, roundResult, "paper");
        break;
      case "ss":
        roundResult = "You draw!";
        rounds++;
        updater(rounds, userScore, cpuScore, roundResult, "scissors");
        break;
      case "sr":
        roundResult = "You lose!";
        rounds++;
        cpuScore++;
        updater(rounds, userScore, cpuScore, roundResult, "rock");
        break;
    }
  });

  boxPaper.addEventListener("click", eO => {
    const combination = "p" + computersChoice();
    switch (combination) {
      case "pr":
        roundResult = "You win!";
        rounds++;
        userScore++;
        updater(rounds, userScore, cpuScore, roundResult, "rock");
        break;
      case "pp":
        roundResult = "You draw!";
        rounds++;
        updater(rounds, userScore, cpuScore, roundResult, "paper");
        break;
      case "ps":
        roundResult = "You lose!";
        rounds++;
        cpuScore++;
        updater(rounds, userScore, cpuScore, roundResult, "scissors");
        break;
    }
  });

  boxRock.addEventListener("click", eO => {
    const combination = "r" + computersChoice();
    switch (combination) {
      case "rs":
        roundResult = "You win!";
        rounds++;
        userScore++;
        updater(rounds, userScore, cpuScore, roundResult, "scissors");
        break;
      case "rr":
        roundResult = "You draw!";
        rounds++;
        updater(rounds, userScore, cpuScore, roundResult, "rock");
        break;
      case "rp":
        roundResult = "You lose!";
        rounds++;
        cpuScore++;
        updater(rounds, userScore, cpuScore, roundResult, "paper");
        break;
    }
  });
}

// ========================
// Execution
// ========================
button.addEventListener("click", () => {
  location.reload();
});

game();
