// console.log("helloworld");

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 100) + 1;

    if (randomChoice >= 1 && randomChoice < 33) {
        randomChoice = "rock";
    } else if (randomChoice >=33 && randomChoice < 66) {
        randomChoice = "paper";
    } else {
        randomChoice = "Scissors";
    }
//    console.log(randomChoice);
}

function getHumanChoice() {
    let userChoice = prompt("Please enter your choice among rock, paper, scissors");
//    console.log(userChoice);
}

getComputerChoice();
getHumanChoice();



