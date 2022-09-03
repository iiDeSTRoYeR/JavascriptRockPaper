let choices = ["Rock", "Paper", "Scissors"];

function computerPlay() {
    //Random is used to generate a random number between 0 and 1, and scaled to the length of the options array
    //Math.floor is used to round down to the nearest whole number as the output of the random function is a decimal
    let random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

function playRound(playerSelection, computerSelection) {
    //In case user enters an invalid data type
    if (typeof playerSelection !== "string" || typeof computerSelection !== "string") {
        return "Invalid input";
    }

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    computerSelection = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);

    //Validation in case user enters a string out of the list of choices
    if (!choices.includes(playerSelection)) {
        return `${playerSelection} is NOT a valid input`;
    }

    //List containing the sceanrios where the user wins
    listOfTruth = [(playerSelection == 'Rock' && computerSelection == 'Scissors'), (playerSelection == 'Paper' && computerSelection == 'Rock'),
    (playerSelection == 'Scissors' && computerSelection == 'Paper')];

    if (listOfTruth.includes(true)) {
        playerScore += 1;
        roundCounter += 1;
        return `You Win! ${playerSelection} beats ${computerSelection}.`
    } else if (playerSelection == computerSelection) {
        roundCounter += 1;
        return 'Tie!'
    } else {
        computerScore += 1;
        roundCounter += 1;
        return `You Lose! ${computerSelection} beats ${playerSelection}.`
    }
}

let playerScore;
let computerScore;
let roundCounter;
let prevoiusRound;

function game() {
    playerScore = 0;
    computerScore = 0;
    roundCounter = 1;
    for (let i = 0; i < 5; i++) {
        prevoiusRound = 1;
        userInput = prompt('Enter your choice of Rock, Paper, Scissors!');
        console.log(playRound(userInput, computerPlay()));
        while (prevoiusRound == roundCounter){
            userInput = prompt('Enter your choice of Rock, Paper, Scissors!');
            console.log(playRound(userInput, computerPlay()));
        }
        prevoiusRound++;
        console.log(`Current Score: Player ${playerScore} vs. Computer ${computerScore}`);
    }
    alert(`Final Score\n Player: ${playerScore} \n Computer: ${computerScore}`);
}

game();