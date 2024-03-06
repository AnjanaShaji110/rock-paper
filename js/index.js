let playerScore = 0;
let computerScore = 0;

const playGame = (option) => {
  let availableOptions = ["rock", "paper", "scissors"];
  let selectedOption =
    availableOptions[Math.floor(Math.random() * availableOptions.length)];
  document.getElementById("computer-option").src =
    "/images/" + selectedOption + ".png";
  document.getElementById("player-option").src = "/images/" + option + ".png";
  winnerCalculation(selectedOption, option);
};
const winnerCalculation = (computerSelectedOption, playerSelectedOption) => {
  if (computerSelectedOption === playerSelectedOption) {
    document.getElementById("balance").style.display = "unset";
    document.getElementById("c-trophy").style.display = "none";
    document.getElementById("p-trophy").style.display = "none";
  } else if (
    computerSelectedOption === "rock" &&
    playerSelectedOption === "paper"
  ) {
    scoreCalculation("player");
  } else if (
    computerSelectedOption === "rock" &&
    playerSelectedOption === "scissors"
  ) {
    scoreCalculation("computer");
  } else if (
    computerSelectedOption === "paper" &&
    playerSelectedOption === "scissors"
  ) {
    scoreCalculation("player");
  } else if (
    computerSelectedOption === "paper" &&
    playerSelectedOption === "rock"
  ) {
    scoreCalculation("computer");
  } else if (
    computerSelectedOption === "scissors" &&
    playerSelectedOption === "paper"
  ) {
    scoreCalculation("computer");
  } else if (
    computerSelectedOption === "scissors" &&
    playerSelectedOption === "rock"
  ) {
    scoreCalculation("player");
  } else {
    document.getElementById("balance").style.display = "none";
  }
};

let scoreCalculation = (winnerName) => {
  if (winnerName === "computer") {
    computerScore += 1;
    document.getElementById("computer-score").innerHTML = computerScore;
    document.getElementById("c-trophy").style.display = "unset";
    document.getElementById("p-trophy").style.display = "none";
  } else {
    playerScore += 1;
    document.getElementById("player-score").innerHTML = playerScore;
    document.getElementById("c-trophy").style.display = "none";
    document.getElementById("p-trophy").style.display = "unset";
  }
  document.getElementById("balance").style.display = "none";
};
