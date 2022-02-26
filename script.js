
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
        results.textContent = `It's a tie! Scores: ${resultCounter[0]} | ${resultCounter[1]} `
    }
    else if (result == 1) {
        resultCounter[0] = resultCounter[0] + 1
        results.textContent = `You won! Scores: ${resultCounter[0]} | ${resultCounter[1]} `
    } 
    else if (result == 2) {
        resultCounter[1] = resultCounter[1] + 1
        results.textContent = `You lost :( Scores: ${resultCounter[0]} | ${resultCounter[1]} `
    }
}

const buttons = document.querySelectorAll('.buttons');

const results = document.createElement('div');
document.body.appendChild(results)

let resultCounter = [0,0]

buttons.forEach((button) => {
    button.addEventListener('click', () => {

        // play game
        let playerSelection = button.textContent;
        let computerSelection = computerPlay();
        playRound(playerSelection, computerSelection)

        // find winner
        if (resultCounter[0] == 5) {
            results.textContent = "You got 5 wins! Good game!"
        }
        else if (resultCounter[1] == 5) {
            results.textContent = "Computer got 5 wins!! >:( Good game!"
        }

    })
})
