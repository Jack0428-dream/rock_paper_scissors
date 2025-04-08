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
    let winner;
    if (humanChoice == "rock" && computerChoice == "paper" ) {
        console.log("You lose! Paper beats Rock"); 
        winner = 1;
    } else if(humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You win! Rock crushes Scissors");
        winner = 2;
    } else if(humanChoice == "paper" && computerChoice == "rock") {
        console.log("You win! Paper beats Rock");
        winner = 4;
    } else if(humanChoice == "paper" && computerChoice == "scissors") {
        console.log("You lose! Scissors tear up Paper"); 
        winner = 3;
    } else if(humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You win! Scissors tear up Paper");
        winner = 6;
    } else if(humanChoice == "scissors" && computerChoice == "rock") {
        console.log("You lose! Rock is too solid for your Scissors");
        winner = 5;
    } else if(humanChoice === computerChoice) {
        console.log("You gussed computer's"); winner = 0;
    } 
    else {
        console.log("something went wrong check your inputs"); winner = 0;
    }

    return winner;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    for (let i=0; i<5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        let winner = playRound(humanSelection, computerSelection);

        if (winner % 2 === 0) {
            humanScore += 1;
        } else if (winner % 2 !== 0) {
            computerScore += 1;
        } else {console.log("No winner")};
        console.log(humanScore);
        console.log(computerScore);
    }
}

playGame();






