console.log("hello, world!");

// const playerSelection = prompt("Rock, Paper, or Scissors?","");

// console.log(playerSelection);

function computerPlay() {
    let choiceArray = [`Rock`, 
                    `Paper`, 
                    `Scissors`]
    const randomChoice = choiceArray[
        Math.floor(Math.random() * (choiceArray.length))];
   return randomChoice
}
function playerChoice() {
    return prompt(`Rock, Paper, or Scissors?`); 
} 

function game() {
   

    
    let playerScore = 0;
    let computerScore = 0;
    let result;
    
    do {
        alert(result =  playRound());
    
        if (result.includes("win")) {
            playerScore++
        } else if (result.includes("lose")) {
            computerScore++
        };
    } while ((playerScore + computerScore) < 5);

    console.log(computerScore);
    console.log(playerScore);
    
    

 //   return playerScore;
   // return computerScore;
    
 
}

function playRound() {
    let playerSelection = playerChoice();
    console.log(playerSelection);
    let computerSelection = computerPlay();   
    console.log(computerSelection);
    
    if  ((playerSelection.toLowerCase() ===  `rock`) & (computerSelection === `Scissors`)) {
        return `Hooray! Rock smashes scissors. You win!`; 
    } else if ((playerSelection.toLowerCase() ===  `rock`) & (computerSelection === `Paper`)) {
        return `Damn... Paper smothers rock. You lose.`;
            
   } else if ((playerSelection.toLowerCase() ===  `paper`) & (computerSelection === `Rock`)) {
        return `Dope! Paper beats rock. You win!`;

   } else if ((playerSelection.toLowerCase() ===  `paper`) & (computerSelection === `Scissors`)) {
        return `Shoot! Scissors cut paper. You lose.`;

    } else if ((playerSelection.toLowerCase() ===  `scissors`) & (computerSelection === `Paper`)) {
        return `Yeeeaaaaaaa boiiiii, scissors slice paper. You win!`;

    } else if ((playerSelection.toLowerCase() ===  `scissors`) & (computerSelection === `Rock`)) {
        return `Demolished!! Rock smashes scissors. You lose.`;

    } else if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return `Wait a second... It's a tie! try again <3`;

    } else { 
        return `something has gone wrong`;
        }
}








//const playerSelection = `rock`;
//const computerSelection = computerPlay();
//console.log(playRound(playerSelection, computerSelection))






// run a function called playRound that simulates RPS game
//  if player chooses rock and computer chooses scissors, player loses
// if player chooses rock and computer chooses paper, player wins
// if player chooses scissors and computer chooses rock, player loses
// if player chooses scissors and computer chooses paper, player wins
// if player chooses paper and computer chooses scissors, player loses
// if player chooses paper and computer chooses rock, player wins