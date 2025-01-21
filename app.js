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

const outcomes = {
  rock: { rock: "tie", paper: "lose", scissors: "win" },
  paper: { rock: "win", paper: "tie", scissors: "lose" },
  scissors: { rock: "lose", paper: "win", scissors: "tie" },
};

const playRound = (humanChoice, computerChoice) => {
  const result = outcomes[humanChoice][computerChoice];
  switch (result) {
    case "win":
      winRound();
      break;
    case "lose":
      loseRound();
      break;
    case "tie":
      console.log("It's a tie!");
      break;
  }
};

while (rounds < 5) {
  playRound(getHumanChoice(), getComputerChoice());
}
