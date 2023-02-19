let computerSelection = getComputerChoice();
let playerSelection = prompt ("Choose rock, paper or scissors");

/*The following function will pick the computer's choice*/
function getComputerChoice() {
    let choice = ["rock", "paper", "scissors"],
     pickedChoice = choice[Math.floor(Math.random() * choice.length)];
     console.log(pickedChoice);
    }

/*This following function will play a round*/
function playRound(playerSelection, computerSelection) {

    if (playerSelection===computerSelection){
        return "It's a tie!" 
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats scissors"
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        return"You loose! Scissors beats paper" 
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You loose! Paper beats rock" 
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper beats rock" 
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! Scissors beats paper"
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        return"You loose! Rock beats scissors"
    }
}
console.log(playRound());