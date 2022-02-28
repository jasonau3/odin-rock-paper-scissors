
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

const randRGB = () => {
    let r = Math.floor(Math.random() * (255));
    let g = Math.floor(Math.random() * (255));
    let b = Math.floor(Math.random() * (255));
    return [r,g,b]
}

const endGame = () => {
    buttons.forEach((button) => {
        button.disabled = true;
        button.style.backgroundColor = "#cccccc";
        button.style.color = "#666666";
    })

    const playAgain = document.createElement('button');
    playAgain.textContent = 'Play again?';
    playAgain.classList.add('playAgain');
    container.appendChild(playAgain);

    playAgain.addEventListener('click', () => {
        location.reload()
    })
}

const spicePage = () => {
    container.style.borderRadius = "9px";
    document.body.style.backgroundColor = 'rgb(' + randRGB().join() + ')';

    let containerRGB = randRGB()
    container.style.backgroundColor = 'rgb(' + containerRGB.join() + ')';

    if ((containerRGB[0] + containerRGB[1] + containerRGB[2]) < 280) {
        header.style.color = "#FFF"
    } else {
        header.style.color = "#202020"
    }

    header.style.fontFamily = "Comic Sans MS, Comic Sans, cursive";
    header.textContent = "Very Fun Rock Paper Scissors"
    buttons.forEach((button) => {
        button.classList.add("fun-buttons");
        button.style.backgroundColor = 'rgb(' + randRGB().join() + ')';
    })

}

const buttons = document.querySelectorAll('.buttons');
const container = document.getElementById("container");
const header = document.getElementsByClassName("heading")[0];

let resultCounter = [0,0]

const results = document.createElement('div');
results.style.margin = "20px 0";
results.textContent = `Scores: ${resultCounter[0]} | ${resultCounter[1]}`
results.style.fontFamily = "Comic Sans MS, Comic Sans, cursive";
results.style.textAlign = "center";
container.appendChild(results)

buttons.forEach((button) => {
    button.addEventListener('click', () => {

        // play game
        let playerSelection = button.textContent;
        let computerSelection = computerPlay();
        playRound(playerSelection, computerSelection)

        // spice things up :P
        spicePage();

        // find winner
        if (resultCounter[0] == 5) {
            results.textContent = "You got 5 wins! Good game!"
            endGame();
        }
        else if (resultCounter[1] == 5) {
            results.textContent = "Computer got 5 wins!! >:( Good game!"
            endGame();
        }

    })
})
