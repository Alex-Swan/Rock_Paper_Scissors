// Variables
let playerSelection;
let playerScore = 0;
let computerScore = 0;
let computerSelection;
const rockButton = document.querySelector("#rock-btn");
const paperButton = document.querySelector("#paper-btn");
const scissorButton = document.querySelector("#scissors-btn");
const message = document.querySelector("#message");

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
    computerScore++;
    return "You lose! Paper beats rock";
  } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
    playerScore++;
    return "You win! Rock beats paper";
  } else if (playerSelection === "ROCK" && computerSelection === "ROCK") {
    return "You draw! You both picked rock";
  } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
    computerScore++;
    return "You lose! Scissors beats PAPER";
  } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
    playerScore++;
    return "You win! Paper beats rock";
  } else if (playerSelection === "PAPER" && computerSelection === "PAPER") {
    return "You draw! You both picked paper";
  } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
    computerScore++;
    return "You lose! Scissors beats paper";
  } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
    playerScore++;
    return "You win! Scissors beats paper";
  } else if (
    playerSelection === "SCISSORS" &&
    computerSelection === "SCISSORS"
  ) {
    return "You draw! You both picked scissors";
  }
}

/* This function plays 1 round of rock paper scissors and then posts to the DOM 
    who won that round, when the winner of 5 rounds has been chosen and alert message
    is sent informing the user who won the whole 5 round game.
*/
function game() {
  computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
  message.innerHTML = `<strong>${playRound(
    playerSelection,
    computerSelection
  )} </strong> <br>
  Your score is ${playerScore / 2}. <br>
  The computers score is ${computerScore / 2}`;
  if (playerScore / 2 == 5) {
    alert("CONGRATULATIONS!! You got the top score of 5");
    playerScore = 0;
    computerScore = 0;
    message.textContent = "Want to play another 5 rounds?";
    return;
  } else if (computerScore / 2 == 5) {
    alert("Im sorry, the computer won 5 rounds, please try again");
    playerScore = 0;
    computerScore = 0;
    message.textContent = "Want to play another 5 rounds?";
    return;
  }
}
