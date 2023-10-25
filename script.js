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
        return("You win! You cant cut the Rock")
        playerScore++ ;
    } else if(playerSelection === "PAPER" && computerSelection === "ROCK"){
        return ("You Win! Wrap that rock!");
        playerScore++;
    }else if(playerSelection === "SCISSOR" && computerSelection === "PAPER"){
        return ("You Win! Cut that Paper!");
        playerScore++;
    }else if (playerSelection === computerSelection){
        return("Tie")
        drawScore++;
    } else{ return("You lost")
        computerScore++;}
    }

function game(){;
    let playerSelection = prompt("Choose your weapon!").toUpperCase();
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

    
}

game();