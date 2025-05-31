let humanScore = 0;
let computerScore = 0;

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
    const userChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();
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
        console.log("Draw!");
    }else if(userChoice === "paper" && computerChoice === "rock"){
        humanScore++;
        console.log("You win!");
        console.log("Current Score - User: " + humanScore + " Computer: " + computerScore);
    }else if(userChoice === "scissors" && computerChoice === "paper"){
        humanScore++;
        console.log("You win!");
        console.log("Current Score - User: " + humanScore + " Computer: " + computerScore);
    }else if(userChoice === "rock" && computerChoice === "scissors"){
        humanScore++;
        console.log("You win!");
        console.log("Current Score - User: " + humanScore + " Computer: " + computerScore);
    }else{
        computerScore++;
        console.log("You lose!");
        console.log("Current Score - User: " + humanScore + " Computer: " + computerScore);
    }
}

let rounds = 5;
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);

function playGame(rounds){
    for(let i = 0; i < rounds; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
}

playGame(rounds);

