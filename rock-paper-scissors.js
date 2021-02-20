// const playerSelection = prompt(`Lets play a game of Rock Paper Scissors!
//   Which option do you choose?`);
// const lostMessage = `You lost, ${computerPlay()} beats ${playerSelection}`;
// const winMessage = `You won! ${playerSelection} beats ${computerPlay()}`;
// const drawMessage = `You both draw, you both picked ${playerSelection}`;

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
  if (playerSelection === "ROCK" && computerSelection ===== "PAPER") {
    return "You lose! Paper beats rock";
  } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
      return "You win! Rock beats paper";
  } else if (playerSelection === "ROCK" && computerSelection === "ROCK") {
      return "You draw! You both picked ROCK";
  }   else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
    return "You lose! Scissors beats paper";
  } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
      return "You win! PAPER beats ROCK";
  } else if (playerSelection === "PAPER" && computerSelection === "PAPER") {
      return "You draw! You both picked PAPER";
  }  else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
    return "You lose! Scissors beats paper";
  } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
      return "You win! SCISSORS beats PAPER";
  } else if (playerSelection === "SCISSORS" && computerSelection === "SCISSORS") {
      return "You draw! You both picked SCISSORS";
  }

  const playerSelection = computerPlay();