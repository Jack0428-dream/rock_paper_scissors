// console.log("helloworld");

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 100) + 1;

    if (randomChoice >= 1 && randomChoice < 33) {
        randomChoice = "rock";
    } else if (randomChoice >=33 && randomChoice < 66) {
        randomChoice = "paper";
    } else {
        randomChoice = "scissors";
    }
    return randomChoice;
}

function getHumanChoice() {
    let userinput = prompt("Please enter your choice among rock, paper, scissors");
    let userChoice = userinput.toLowerCase();
    return userChoice;
}

function playRound(humanChoice, computerChoice) {

    if (humanChoice == "rock" && computerChoice == "paper" ) {
        console.log("You lose! Paper beats Rock");
    } else if(humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You win! Rock crushes Scissors");
    } else if(humanChoice == "paper" && computerChoice == "rock") {
        console.log("You win! Paper beats Rock");
    } else if(humanChoice == "paper" && computerChoice == "scissors") {
        console.log("You lose! Scissors tear up Paper")
    } else if(humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You win! Scissors tear up Paper");
    } else if(humanChoice == "scissors" && computerChoice == "rock") {
        console.log("You lose! Rock is too solid for your Scissors");
    } else {
        console.log("something went wrong check your inputs")
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

let humanScore = 0 ;
let computerScore = 0; 

// console.log(humanSelection);
// console.log(computerSelection);

playRound(humanSelection,computerSelection);




