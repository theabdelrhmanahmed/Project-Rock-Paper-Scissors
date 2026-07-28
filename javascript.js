'use strict';
/*
Write the code so that getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.
Hint: The Math.random method returns a random number that’s greater than or equal to 0 and less than 1.
 Think about how you can use this to conditionally return one of the multiple choices.
Note: Some learners might think that arrays are necessary for this problem, but they aren’t.
 If you’re unfamiliar with arrays, don’t worry - they’ll be covered later in the curriculum.
*/
let ranChoice= "";
let humChoice;
const getComputerChoice =function(){
    const comChoice =Math.trunc(Math.random()*3)+1;
    switch (comChoice){
    case 1:
        return "rock";
        break;
    case 2:
        return "paper";
        break;
    case 3:
        return "scissor";
        break;    
        }
    return
}
const getRanChoice=getComputerChoice(ranChoice);
console.log(getRanChoice);



// Human Choice
const getHumanChoice= function(humChoice= prompt("Enter your choice: ").toLowerCase()){
    return humChoice
}
const getHumChoice = getHumanChoice(humChoice);
console.log(getHumChoice)


// play round fuction


let humanScore = 0;
let computerScore = 0;

const playRound = function (humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    return "It's a tie!";
  }

  if (humanChoice === "rock" && computerChoice === "scissor") {
    humanScore++;
    return `You won! ${humanChoice} beats ${computerChoice}`;
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore++;
    return `Computer won! ${computerChoice} beats ${humanChoice}`;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
    return `You won! ${humanChoice} beats ${computerChoice}`;
  } else if (humanChoice === "paper" && computerChoice === "scissor") {
    computerScore++;
    return `Computer won! ${computerChoice} beats ${humanChoice}`;
  } else if (humanChoice === "scissor" && computerChoice === "paper") {
    humanScore++;
    return `You won! ${humanChoice} beats ${computerChoice}`;
  } else if (humanChoice === "scissor" && computerChoice === "rock") {
    computerScore++;
    return `Computer won! ${computerChoice} beats ${humanChoice}`;
  }
};
const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

console.log(playRound(humanChoice, computerChoice));

console.log(`Human Score: ${humanScore}`);
console.log(`Computer Score: ${computerScore}`);
