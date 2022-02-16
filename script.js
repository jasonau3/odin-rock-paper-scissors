
const computerPlay = () => {

    // make an array of choices and return a random choice
    const choicesArray = ["Rock", "Paper", "Scissors"];
    return choicesArray[Math.floor(Math.random() * choicesArray.length)]
}


const playRound = (playerSelection, computerSelection) => {

    // clean the strings
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    // now return result
    if (playerSelection == computerSelection) {
        return showResult(0)
    } 
    else if ((playerSelection === "rock" && computerSelection === "scissors") || 
        (playerSelection === "scissors" && computerSelection === "paper") || 
        (playerSelection === "paper" && computerSelection === "rock")) {
        return showResult(1)
    }
    else {
        return showResult(2)
    }

}

const showResult = (result) => {

    // helper function for when GUI is added 
    if (result == 0) {
        return ("It's a tie!")
    }
    else if (result == 1) {
        return ("You won!")
    } 
    else if (result == 2) {
        return ("You lost :(")
    }
}

const game = () => {

    // play 5 times
    for (let i = 0; i<5; i++) {

        const playerSelection = prompt("What will you go? (rock, paper, scissors)");
        const computerSelection = computerPlay();

        console.log(playRound(playerSelection, computerSelection))
    }
}

game()