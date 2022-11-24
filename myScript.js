const computerSelection = getComputerChoice();
const playerSelection = getPlayerChoice();

function getComputerChoice() {
    computerChoice = Math.floor(Math.random() * 3);
    return computerChoice;
}

function getPlayerChoice() {
    playerChoice =  prompt("choose between rock, paper or scissors by typing it.").toLowerCase().trim();
    
}