//Rock, Paper, Scissors game for The Odin Project


//computer's random array choice
function computerPlay() {
    let choiceArray = [`Rock`, 
                    `Paper`, 
                    `Scissors`]
    const randomChoice = choiceArray[
        Math.floor(Math.random() * (choiceArray.length))];
   return randomChoice
}

//player choice entry
function playerChoice() {
    return prompt(`Rock, Paper, or Scissors?`); 
} 

//individual round of R,P,S used within game() 
function playRound() {
    
    //variable input using previous functions
    let playerSelection = playerChoice();
    console.log(playerSelection);
    let computerSelection = computerPlay();   
    console.log(computerSelection);
    
    //string comparisons to declare winner
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

//initiates a game of R,P,S that ends when both player's scores total 5. 
function game() {
   

    //score variables
    let playerScore = 0;
    let computerScore = 0;
    let result;
    
    //loop 5x
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
    
    //winner alert
    if (computerScore > playerScore) {
       return alert("Looks like your luck has run out... try again.")
    } else if (computerScore < playerScore) {
       return alert("Wow! You got lucky this time...")
    } else {
       return alert("A tie?? Let's give it another go, shall we?")
    }
    
    
}

