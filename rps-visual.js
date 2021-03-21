// Variables
let playerSelection;
let playerScore = 0;
let computerScore = 0;
let computerSelection;
const rockButton = document.querySelector("#rock-btn");
const paperButton = document.querySelector("#paper-btn");
const scissorButton = document.querySelector("#scissors-btn");

// This function below randomly chooses between ROCK PAPER or SCISSORS
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

// These are the event listeners for the ROCK PAPER SCISSORS buttons on the page.
// When a button has been clicked it changes the playerSelection to button option.
rockButton.addEventListener("click", () => {
  playerSelection = "ROCK";
  game();
});

paperButton.addEventListener("click", () => {
  playerSelection = "PAPER";
  game();
});

scissorButton.addEventListener("click", () => {
  playerSelection = "SCISSORS";
  game();
});

/* 
This function below sees what the button the player picked and what the random computer option, it then adds 1 to the winners points
after this it posts to the console who won that round or it was a draw.
*/
function playRound(playerSelection, computerSelection) {
  if (playerSelection == "ROCK" && computerSelection == "PAPER") {
    computerScore = computerScore += 1;
    return "You lose! Paper beats rock";
  } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
    playerScore = playerScore += 1;
    return "You win! Rock beats paper";
  } else if (playerSelection === "ROCK" && computerSelection === "ROCK") {
    return "You draw! You both picked rock";
  } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
    computerScore = computerScore += 1;
    return "You lose! Scissors beats PAPER";
  } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
    playerScore = playerScore += 1;
    return "You win! Paper beats rock";
  } else if (playerSelection === "PAPER" && computerSelection === "PAPER") {
    return "You draw! You both picked paper";
  } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
    computerScore = computerScore += 1;
    return "You lose! Scissors beats paper";
  } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
    playerScore = playerScore += 1;
    return "You win! Scissors beats paper";
  } else if (
    playerSelection === "SCISSORS" &&
    computerSelection === "SCISSORS"
  ) {
    return "You draw! You both picked scissors";
  }
}

function game() {
  computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
  console.log(playRound(playerSelection, computerSelection));
}
