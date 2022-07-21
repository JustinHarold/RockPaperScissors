
function game (){
    playRound()
}

function playRound(){
    let computerSelection= computerSelect()
    let playerSelection = playerSelect()
}

function computerSelect(){
    let choices = ["rock", "paper", "scissors"]
    return choices = [Math.floor(Math.random()* choices.length)];
    console.log(computerSelect)
}

function playerSelect(){
    let input = prompt ("choose Rock paper Scissors")
    input = input.toLowerCase()
}

function checkWinner(choiceP, choiceC){
    if(choicep === choiceC){
            return "tie";
    } else if (
    (choiceP === "rock" && choiceC === "scissors") ||
    (choiceP === "paper" && choiceC === "rock") || 
    (choiceP === "Scissors" && choiceC === "paper") 
    ){
        return "player wins"
    } else {
        return "computer wins
    }
}

game()