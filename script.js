function getComputerChoice(){
    const weapons = ["Rock", "Paper","Scissor"];
    const random = weapons[Math.floor(Math.random() * weapons.length)];
    console.log(random);
    return random;
}



function playRounds(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Scissor"){
        return("You win! You cant cut the Rock");
    } else if(playerSelection === "Paper" && computerSelection === "Rock"){
        return ("You Win! Wrap that rock!");
    }else if(playerSelection === "Scissor" && computerSelection === "Paper"){
        return ("You Win! Cut that Paper!");
    }else if (playerSelection === computerSelection){
        return("Tie");
    } else{ return("You lost");}
    }

function game(){
    let playerSelection = prompt("Choose your weapon!");
    let computerSelection = getComputerChoice();
       console.log(playRounds(playerSelection, computerSelection));
       console.log("")
       

       playerSelection = prompt("Choose your weapon!") ;
       computerSelection = getComputerChoice();
       console.log(playRounds(playerSelection, computerSelection));
       console.log("")

        playerSelection = prompt("Choose your weapon!") ;
        computerSelection = getComputerChoice();
       console.log(playRounds(playerSelection, computerSelection));
       console.log("")

        playerSelection = prompt("Choose your weapon!") ;
        computerSelection = getComputerChoice();
       console.log(playRounds(playerSelection, computerSelection));
       console.log("")

        playerSelection = prompt("Choose your weapon!") ;
        computerSelection = getComputerChoice();
       console.log(playRounds(playerSelection, computerSelection));
       console.log("")
}

game();