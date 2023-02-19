/*The following function will pick the computer's choice*/
function getComputerChoice() {
let choice = ["rock", "paper", "scissors"],
 pickedChoice = choice[Math.floor(Math.random() * choice.length)];
 console.log(pickedChoice);
}

/*This following function will play a round*/
function playRound(playerSelection, computerSelection) {

}


console.log(getComputerChoice());