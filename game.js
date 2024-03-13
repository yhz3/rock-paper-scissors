function getComputerChoice() {
    n = Math.random();
    if (n > 0.67) {
        return "rock";
    } else if (n > 0.33) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Assumes playerSelection and computerSelection are formatted in lowercase
function playRound(playerSelection, computerSelection) {
    win = false;
    if (playerSelection == computerSelection) {
        return "Tie!";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        win = true;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        win = true;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        win = true;
    }

    if (win) {
        return "You win! " + playerSelection[0].toUpperCase() + playerSelection.slice(1) + " beats " + computerSelection + ".";
    } else {
        return "You lose! " + computerSelection[0].toUpperCase() + computerSelection.slice(1) + " beats " + playerSelection + ".";
    }
}

function playGame() {

    playerWins = 0;
    ties = 0;

    for (i = 1; i < 6; i++) {
        // Keeps prompting until a proper input is given:
        while (!(move = prompt("Play a move: ").toLowerCase().trim()) && (move != "rock" || move != "paper" || move != "scissors")) {
            console.log("Please input a valid move: rock | paper | scissors\n");
        }
        result = playRound(move, getComputerChoice());
        console.log("Round " + i + ": " + result + "\n");
        // Finding wins
        if (result.includes("win")) {
            playerWins++;
        } else if (result.includes("Tie")) {
            ties++;
        }
    }

    playerLosses = 5 - playerWins - ties

    console.log("Wins: " + playerWins + " | Losses: " + playerLosses + " | Ties: " + ties + "\n");
}