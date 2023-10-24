function getComputerChoice(){
    const weapons = ["ROCK", "PAPER","SCISSOR"];
    const random = weapons[Math.floor(Math.random() * weapons.length)];
    console.log(random)
    return random;
}



function playRounds(playerSelection, computerSelection) {
    if (playerSelection === "ROCK" && computerSelection === "SCISSOR"){
        return("You win! You cant cut the Rock");
    } else if(playerSelection === "PAPER" && computerSelection === "ROCK"){
        return ("You Win! Wrap that rock!");
    }else if(playerSelection === "SCISSOR" && computerSelection === "PAPER"){
        return ("You Win! Cut that Paper!");
    }else if (playerSelection === computerSelection){
        return("Tie");
    } else{ return("You lost");}
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