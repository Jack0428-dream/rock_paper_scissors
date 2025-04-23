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
    let msg = "";
    let num = 0;
    if (humanChoice == "rock" && computerChoice == "paper" ) {
        msg = "You lose! Paper beats Rock"; 
        num = 0;
    } else if(humanChoice == "rock" && computerChoice == "scissors") {
        msg = "You win! Rock crushes Scissors";
        num = 1;
    } else if(humanChoice == "paper" && computerChoice == "rock") {
        msg = "You win! Paper beats Rock";
        num = 1;
    } else if(humanChoice == "paper" && computerChoice == "scissors") {
        msg = "You lose! Scissors tear up Paper";
        num = 0;
    } else if(humanChoice == "scissors" && computerChoice == "paper") {
        msg = "You win! Scissors tear up Paper";
        num = 1;
    } else if(humanChoice == "scissors" && computerChoice == "rock") {
        msg = "You lose! Rock is too solid for your Scissors";
        num = 0;
    } else if(humanChoice === computerChoice) {
        msg = "You guessed computer's choice"
        num = 0;
    };

    return [msg, num];
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

button1.textContent = button1.id;
button2.textContent = button2.id;
button3.textContent = button3.id;

const buttons = document.querySelectorAll("button");

let randomChoice = getComputerChoice();

const p4 = document.createElement("p");
body.appendChild(p4);
const div = document.createElement("div");
p4.appendChild(div);
div.setAttribute('style', 'white-space: pre');

let winScore = 0;
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let result = [];
        if (button.id === "rock") {
            result = playRound("rock", getComputerChoice());
            div.textContent += result[0]+".\r\n";
            winScore += result[1];
        } else if (button.id === "paper") {
            result = playRound("paper", getComputerChoice());
            div.textContent += result[0]+".\r\n";
            winScore += result[1];
        } else if (button.id === "scissors") {
            result = playRound("scissors", getComputerChoice());
            div.textContent += result[0]+".\r\n";
            winScore += result[1];
        }

        if (winScore >= 2 && winScore != 5) {
            div.textContent += "You win"+ `${winScore}`+ "times"+"\r\n" 
        } else if (winScore === 1) {
            div.textContent += "You win for the first time!"+"\r\n";
        } else if (winScore === 5) {
            div.textContent += "You've reached 5points. You Win!"+"\r\n";
            p1.removeChild(button1);
            p2.removeChild(button2);
            p3.removeChild(button3);
        }

    });
});




