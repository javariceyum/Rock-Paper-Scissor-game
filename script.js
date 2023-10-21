function getComputerChoice(){
    const weapons = ["Rock", "Paper","Scissor"];
    const random = weapons[Math.floor(Math.random() * weapons.length)];
    console.log(random);
    return random;
}



function playRounds(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Scissor"){
        return("You win");
    } else if(playerSelection === "Paper" && computerSelection === "Rock"){
                return ("You Win");
    }else if (playerSelection === computerSelection){
        return("Tie");
    } else{ return("You lost");}
    }

const playerSelection = "Rock" ;
const computerSelection = getComputerChoice();


console.log(playRounds( playerSelection, computerSelection));
    