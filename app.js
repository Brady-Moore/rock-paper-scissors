let humanScore = 0;
let computerScore = 0;
let rounds = 0;

const getHumanChoice = () => {
  let choice;
  const validChoices = ["rock", "paper", "scissors"];
  do {
    choice = prompt("Rock, Paper, or Scissors?").toLowerCase();
  } while (!validChoices.includes(choice));
  return choice;
};

const getComputerChoice = () => {
  const RNG = Math.random();
  if (RNG < 0.34) {
    return "rock";
  } else if (RNG < 0.67) {
    return "paper";
  } else {
    return "scissors";
  }
};

const winRound = () => {
  humanScore++;
  rounds++;
  console.log("You win!");
  console.log(
    `Player: ${humanScore} Computer: ${computerScore} Rounds played: ${rounds}`
  );
};

const loseRound = () => {
  computerScore++;
  rounds++;
  console.log("You lose!");
  console.log(
    `Player: ${humanScore} Computer: ${computerScore} Rounds played: ${rounds}`
  );
};

const playRound = (humanChoice, computerChoice) => {
  if (humanChoice === "rock") {
    switch (computerChoice) {
      case "rock":
        console.log("It's a tie!");
        break;
      case "paper":
        loseRound();
        break;
      case "scissors":
        winRound();
        break;
    }
  } else if (humanChoice === "paper") {
    switch (computerChoice) {
      case "rock":
        winRound();
        break;
      case "paper":
        console.log("It's a tie!");
        break;
      case "scissors":
        loseRound();
        break;
    }
  } else if (humanChoice === "scissors") {
    switch (computerChoice) {
      case "rock":
        loseRound();
        break;
      case "paper":
        winRound();
        break;
      case "scissors":
        console.log("It's a tie!");
        break;
    }
  }
};

while (rounds < 5) {
  playRound(getHumanChoice(), getComputerChoice());
}
