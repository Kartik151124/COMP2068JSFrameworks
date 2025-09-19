// Rock Paper Scissor
const prompt = require('prompt');

prompt.start();

// For Choice
prompt.get(['userSelection'], function (err, result) {
  if (err) {
    console.error(err);
    return;
  }

  const userSelection = result.userSelection.toUpperCase();
  console.log(`You chose: ${userSelection}`);

  // For computer's selection
  const randomValue = Math.random();
  let computerSelection;

  if (randomValue <= 0.34) {
    computerSelection = "PAPER";
  } else if (randomValue <= 0.67) {
    computerSelection = "SCISSORS";
  } else {
    computerSelection = "ROCK";
  }

  console.log(`Computer chose: ${computerSelection}`);

  if (userSelection === computerSelection) {
    console.log("It's a tie!");
  } else if (
    (userSelection === "ROCK" && computerSelection === "SCISSORS") ||
    (userSelection === "PAPER" && computerSelection === "ROCK") ||
    (userSelection === "SCISSORS" && computerSelection === "PAPER")
  ) {
    console.log("User Wins!");
  } else {
    console.log("Computer Wins!");
  }
});
