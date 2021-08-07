//Rock, Paper, Scissors game for The Odin Project

//Queries
const rock = document.querySelector(`#rock`);
const paper = document.querySelector(`#paper`);
const scissors = document.querySelector(`#scissors`);
const results = document.querySelector(`#results`);
const gameChoice = document.getElementsByClassName(`.game-choice`);
const score = document.querySelector(`#score`);

//computer's random array choice
function computerPlay() {
    let choiceArray = [`Rock`, 
                    `Paper`, 
                    `Scissors`]
    const randomChoice = choiceArray[
        Math.floor(Math.random() * (choiceArray.length))];
   return randomChoice
}



// Starting scores
let playerScore = 0;
let computerScore = 0;

//Event listeners for each decision
//** investigate ways to combine these three functions. Must determine choice based on query selected.
rock.addEventListener(`click`, () => {
    results.textContent = playRound(`rock`);
    
    if (playerScore === 5) {
        score.textContent = `Final Score -- Your score: ${playerScore}.
        Computer score: ${computerScore}`;
        results.textContent += ` Select another choice to play again.`
        playerScore = 0;
        computerScore = 0;
    }
    else if (computerScore === 5) {
        score.textContent = `Final Score -- Your score: ${playerScore}.
        Computer score: ${computerScore}`;
        results.textContent += ` Select another choice to play again.`;
        playerScore = 0;
        computerScore = 0;
    }
    else {
        score.textContent = `Your score: ${playerScore}.
        Computer score: ${computerScore}`;
    }
});

paper.addEventListener(`click`, () => {
    results.textContent = playRound(`paper`);
    
    if (playerScore === 5) {
        score.textContent = `Final Score -- Your score: ${playerScore}.
        Computer score: ${computerScore}`;
        results.textContent += ` Select another choice to play again.`
        playerScore = 0;
        computerScore = 0;
    }
    else if (computerScore === 5) {
        score.textContent = `Final Score -- Your score: ${playerScore}.
        Computer score: ${computerScore}`;
        results.textContent += ` Select another choice to play again.`;
        playerScore = 0;
        computerScore = 0;
    }
    else {
        score.textContent = `Your score: ${playerScore}.
        Computer score: ${computerScore}`;
    }
});

scissors.addEventListener(`click`, () => {
    results.textContent = playRound(`scissors`);
    
    if (playerScore === 5) {
        score.textContent = `Final Score -- Your score: ${playerScore}.
        Computer score: ${computerScore}`;
        results.textContent += ` Select another choice to play again.`
        playerScore = 0;
        computerScore = 0;
    }
    else if (computerScore === 5) {
        score.textContent = `Final Score -- Your score: ${playerScore}.
        Computer score: ${computerScore}`;
        results.textContent += ` Select another choice to play again.`;
        playerScore = 0;
        computerScore = 0;
    }
    else {
        score.textContent = `Your score: ${playerScore}.
        Computer score: ${computerScore}`;
    }
});



//individual round of R,P,S
function playRound(playerSelection) {
    const computerSelection = computerPlay();

    if  ((playerSelection.toLowerCase() ===  `rock`) & (computerSelection === `Scissors`)) {
        playerScore++;
        return `Hooray! Rock smashes scissors. You win!`; 
    } else if ((playerSelection.toLowerCase() ===  `rock`) & (computerSelection === `Paper`)) {
        computerScore++;
        return `Damn... Paper smothers rock. You lose.`;
   } else if ((playerSelection.toLowerCase() ===  `paper`) & (computerSelection === `Rock`)) {
        playerScore++;
        return `Dope! Paper beats rock. You win!`;
   } else if ((playerSelection.toLowerCase() ===  `paper`) & (computerSelection === `Scissors`)) {
        computerScore++
        return `Shoot! Scissors cut paper. You lose.`;
    } else if ((playerSelection.toLowerCase() ===  `scissors`) & (computerSelection === `Paper`)) {
        playerScore++;
        return `Yeeeaaaaaaa boiiiii, scissors slice paper. You win!`;
    } else if ((playerSelection.toLowerCase() ===  `scissors`) & (computerSelection === `Rock`)) {
        computerScore++
        return `Demolished!! Rock smashes scissors. You lose.`;
    } else if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return `Wait a second... It's a tie! try again <3`;
    } else { 
        return `something has gone wrong`;
    }
}