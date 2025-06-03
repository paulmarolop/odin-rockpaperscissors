let humanScore = 0;
let computerScore = 0;

const resultDiv = document.getElementById('round-result');
const scoreDiv = document.getElementById('score');
const winnerDiv = document.getElementById('winner');

const buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener("click", () => playRound(button.id, getComputerChoice())));
console.log(buttons);

function getComputerChoice(){
    const computerChoice = Math.floor(Math.random() * 3);
    if(computerChoice === 0){
        return "paper";
    }else if(computerChoice === 1){
        return "scissors";
    }else if(computerChoice === 2){
        return "rock";
    }
}

// console.log(getComputerChoice(Math.floor(Math.random() * 3)));

function getHumanChoice(){
    if(userChoice === "paper"){
        return "paper";
    }else if(userChoice === "scissors"){
        return "scissors";
    }else if(userChoice === "rock"){
        return "rock";
    }
}

// console.log(getHumanChoice(prompt("Rock, Paper, or Scissors?").toLowerCase()));

function playRound(userChoice, computerChoice) {
    console.log("User: " + userChoice + " Computer: " + computerChoice);

    if(userChoice === computerChoice){
        resultDiv.textContent = "Draw!";
        console.log("Draw!");
    }else if((userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')){
        humanScore++;
        resultDiv.textContent = `You win! ${userChoice} beats ${computerChoice}`;
        console.log("You win!");
        console.log("Current Score - User: " + humanScore + " Computer: " + computerScore);
    }else{
        computerScore++;
        console.log("You lose!");
        resultDiv.textContent = `You lose! ${computerChoice} beats ${userChoice}`;
        console.log("Current Score - User: " + humanScore + " Computer: " + computerScore);
    }

    scoreDiv.textContent = 'Player: ' + humanScore + ' Computer: ' + computerScore;

    if(humanScore === 5){
        winnerDiv.textContent = "You win the game!";
    }else if(computerScore === 5){
        winnerDiv.textContent = "You lose the game!";
    }
}

// let rounds = 5;
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);

// function playGame(rounds){
//     for(let i = 0; i < rounds; i++){
//         const humanSelection = getHumanChoice();
//         const computerSelection = getComputerChoice();
//         playRound(humanSelection, computerSelection);
//     }
// }

// playGame(rounds);

