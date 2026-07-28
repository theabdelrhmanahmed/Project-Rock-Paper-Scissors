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
const getComputerChoice =function(choice){
    const comChoice =Math.trunc(Math.random()*3)+1;
    switch (comChoice){
    case 1:
        choice= "rock";
        break;
    case 2:
        choice="paper";
        break;
    case 3:
        choice="scissor";
        break;    
        }
    return choice
}
const getRanChoice=getComputerChoice(ranChoice);
console.log(getRanChoice);

// Human Choice
const getHumanChoice= function(humChoice= prompt("Enter your choice: ")){
    return humChoice
}
const getHumChoice = getHumanChoice(humChoice);
console.log(getHumChoice)

let humanScore =0;
let computerScore=0;

const playRound = function(score1,score2){
    if(getHumChoice=="rock"&&getRanChoice=="scissor")
    {
        humanScore+= ++score1;
        return `User's score: ${score1}\ncomputer score: ${score2}`
    }else if(getHumChoice=="rock"&&getRanChoice=="paper"){
       computerScore+= ++score2;
        return `User's score: ${score1}\ncomputer score: ${score2}`
    }else if(getHumChoice=="scissor"&&getRanChoice=="paper"){
        humanScore+= ++score1;
        return `User's score: ${score1}\ncomputer score: ${score2}`
    }
    else if(getHumChoice=="scissor"&&getRanChoice=="rock"){
        computerScore+= ++score2;
        return `User's score: ${score1}\ncomputer score: ${score2}`
    }else if(getHumChoice=="paper"&&getRanChoice=="rock"){
        humanScore+= ++score1;
        return `User's score: ${score1}\ncomputer score: ${score2}`
    }else if(getHumChoice=="paper"&&getRanChoice=="scissor"){
        computerScore+= ++score2;
        return `User's score: ${score1}\ncomputer score: ${score2}`
    }else{
        return `User's score: ${score1}\ncomputer score: ${score2}`
    }


}
const round= playRound(humanScore,computerScore)
console.log(round)