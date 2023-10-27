function getComputerChoice(){
    const weapons = ["ROCK", "PAPER","SCISSOR"];
    const random = weapons[Math.floor(Math.random() * weapons.length)];
    console.log(random)
    return random;
}


let playerScore = 0;
let computerScore = 0;
let drawScore = 0

function playRounds(playerSelection, computerSelection) {
    if (playerSelection === "ROCK" && computerSelection === "SCISSOR"){
        console.log("You win! You cant cut the Rock")
        return playerScore++ ;
    } else if(playerSelection === "PAPER" && computerSelection === "ROCK"){
        console.log("You Win! Wrap that rock!");
        return playerScore++;
    }else if(playerSelection === "SCISSOR" && computerSelection === "PAPER"){
        console.log("You Win! Cut that Paper!")
        return playerScore++;
    }else if (playerSelection === computerSelection){
        console.log("Tie");
        return  drawScore++;
    } else{ console.log("You lost")
        return computerScore++;}
    }


function game(){
    let playerSelection = prompt("Choose your weapon!");
    if (playerSelection === null){
        return;
    }else{playerSelection = prompt("Choose your weapon!").toUpperCase();}
    let computerSelection = getComputerChoice();
       console.log(playRounds(playerSelection, computerSelection));
       console.log("")
       

       playerSelection = prompt("Choose your weapon!").toUpperCase();
       computerSelection = getComputerChoice();
       console.log(playRounds(playerSelection, computerSelection));
       console.log("")

       playerSelection = prompt("Choose your weapon!").toUpperCase();
        computerSelection = getComputerChoice();
       console.log(playRounds(playerSelection, computerSelection));
       console.log("")

       playerSelection = prompt("Choose your weapon!").toUpperCase();
        computerSelection = getComputerChoice();
       console.log(playRounds(playerSelection, computerSelection));
       console.log("")

       playerSelection = prompt("Choose your weapon!").toUpperCase();
        computerSelection = getComputerChoice();
       console.log(playRounds(playerSelection, computerSelection));
       console.log("")

       if (playerScore >= 3){
        console.log("You win the game.");
       } else if (computerScore >= 3){
        console.log("Computer wins the game.")
       } else if (drawScore >= 3){
        console.log("The game is draw");
       } else {
        console.log("Invalid game")
    }

    
}
game();