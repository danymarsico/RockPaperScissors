let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;


/*The following function will pick the computer's choice*/
function getComputerChoice() {
    let choice = ["Rock", "Paper", "Scissors"];
     pickedChoice = choice[Math.floor(Math.random() * choice.length)];
     return pickedChoice.toLowerCase();
    }

/*This following function will play a round*/
function playRound(playerSelection, computerSelection) {
    let roundResult;
    computerSelection = getComputerChoice();
    playerSelection = prompt ("Choose rock, paper or scissors: ").toLowerCase();

    if (playerSelection==computerSelection){
        computerScore++;
        playerScore++;
        roundResult = "It's a tie!"; 
    }
    else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")) {
        playerScore++;
        roundResult = `You win! ${playerSelection} beats ${computerSelection}`;
    }
    else {
        computerScore++;
        roundResult = `You loose! ${computerSelection} beats ${playerSelection}`;
    }
    
    console.log(computerSelection);
    console.log(playerSelection);
    return roundResult;
};

function game() {
    let round = 1;
    while (round <= 5) {
        console.log(playRound());
        if(round == 5) {
            if(playerScore == computerScore) {
                console.log("Game is a draw!");
            } else if(playerScore > computerScore) {
                console.log(`Player wins with ${playerScore} points`);
            }
            else if(playerScore < computerScore) {
                console.log(`Computer wins with ${computerScore} points`);
            }
        };
        round++;
    };
    
};

game();