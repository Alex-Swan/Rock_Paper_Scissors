let playerSelection = prompt(
  "Lets play a game of Rock Paper Scissors! Which option do you choose?"
);
playerSelection = playerSelection.toUpperCase();
const computerSelection = computerPlay();

function computerPlay() {
  const computerOption = Math.floor(Math.random() * 3) + 1;
  if (computerOption === 1) {
    return "ROCK";
  } else if (computerOption === 2) {
    return "PAPER";
  } else if (computerOption === 3) {
    return "SCISSORS";
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "ROCK" && computerSelection == "PAPER") {
    return "You lose! Paper beats rock";
  } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
    return "You win! Rock beats paper";
  } else if (playerSelection === "ROCK" && computerSelection === "ROCK") {
    return "You draw! You both picked rock";
  } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
    return "You lose! Scissors beats PAPER";
  } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
    return "You win! Paper beats rock";
  } else if (playerSelection === "PAPER" && computerSelection === "PAPER") {
    return "You draw! You both picked paper";
  } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
    return "You lose! Scissors beats paper";
  } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
    return "You win! Scissors beats paper";
  } else {
    return "You draw! You both picked scissors";
  }
}

console.log(playRound(playerSelection, computerSelection));
