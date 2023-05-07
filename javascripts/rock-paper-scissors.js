// Game of Rock Paper Scissors
// Player plays against Computer

// Score
let playerScore = 0;
let computerScore = 0;
let roundCount = 1;
const maxGames = 5;

// Repeat five times (rounds)
while (roundCount <= maxGames){
    let playerChoice = getPlayerChoice();
    if (playerChoice == "exit"){
        break;
    }
    announceRoundWinner(returnWinner(playerChoice, getComputerChoice()));
    roundCount++;

}
announceWinner(playerScore, computerScore);

// Get Player choise from Player input
function getPlayerChoice() {
    while (true){
        let playerInput = prompt(getPromptText());
        if (playerInput == null){
            return "exit";
        }
        let lowerCaseInput = playerInput.toLowerCase();
        if (lowerCaseInput == "rock" || lowerCaseInput == "paper" || lowerCaseInput == "scissors"){
    
            return lowerCaseInput;
        }
    }
}

// Parse prompt text
function getPromptText(){
    return `Rock Paper Scissors
    Round: ${roundCount}
    Player ${playerScore} : ${computerScore} Computer
    Write your choise`;
}

// Randomize Computer choise
function getComputerChoice(){
    let randomizedChoice = Math.floor( Math.random()*3)+1
    let literalChoice = "";
    switch (randomizedChoice){
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

// Resolve winner of the round
function returnWinner(playerChoice, computerChoice){

    // Compare Player and Computer choises
    if (playerChoice == computerChoice){
        return "Tie";
    }

    if (playerChoice == "rock"){
        if (computerChoice == "paper"){
            return "Computer";
        }
        else return "Player";
    }

    if (playerChoice == "paper"){
        if (computerChoice == "scissors"){
            return "Computer";
        }
        else return "Player";
    }

    if (playerChoice == "scissors"){
        if (computerChoice == "rock"){
            return "Computer";
        }
        else return "Player";
    }
}

// Announce Winner of the round
function announceRoundWinner(winner){
    if (winner == "Tie"){
        alert("It's a tie!");
        return;
    }

    // Increment respected score
    if (winner == "Player"){
        playerScore++; 
    }
    else if (winner == "Computer"){
        computerScore++;
    }

    alert(winner + " wins round");
}

// Announce Winner of the game
function announceWinner(playerScore, computerScore) {
    if (playerScore == computerScore){
        alert("Game is a tie!");
        return;
    }
    else if (playerScore > computerScore){
        alert("Player wins the game!");
        return;
    }
    else{
        alert("Computer wins!");
        return;
    }
}