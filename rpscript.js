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
        console.log("You guessed computer's"); winner = 0;
    } 
    else {
        console.log("something went wrong check your inputs"); winner = 0;
    }

    return winner;
}

const button1 = document.createElement("button");
button1.setAttribute("id", "rock");
const button2 = document.createElement("button");
button2.setAttribute("id", "paper");
const button3 = document.createElement("button");
button3.setAttribute("id", "scissors");
const body = document.querySelector("#body");

const p1 = document.createElement("p");
const p2 = document.createElement("p");
const p3 = document.createElement("p");

body.appendChild(p1);
body.appendChild(p2);
body.appendChild(p3);

p1.appendChild(button1);
p2.appendChild(button2);
p3.appendChild(button3);

button1.textContent = "Rock";
button2.textContent = "Paper";
button3.textContent = "Scissors";

const btn1 = document.querySelector("#rock");
const btn2 = document.querySelector("#paper");
const btn3 = document.querySelector("#scissors");

let randomChoice = getComputerChoice();

btn1.addEventListener("click", () => {
    playRound("rock", randomChoice);
});

btn2.addEventListener("click", () => {
    playRound("paper", randomChoice);
});

btn3.addEventListener("click", () => {
    playRound("scissors", randomChoice);
});

const p4 = document.createElement("p");
body.appendChild(p4);
const div = document.createElement("div");
p4.appendChild(div);





