function getUserChoice (userInput) {
    //userInput = prompt("pick rock paper scissors")
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || 
    userInput === 'scissors' || 
    userInput === 'paper') {
        return userInput;
    } else  {
        console.log('Error, please type rock paper or scissors');
    }
}

function getComputerChoice() {
   const randomNumber = Math.floor(Math.random()* 3);
    switch (randomNumber) {
        case 0:
            return "rock";
            break;
        case 1:
            return "scissors";
            break;
        case 2:
            return "paper"; 
            break;
    }
}; 

function determineWinner(getUserChoice, getComputerChoice){
    if(getUserChoice === getComputerChoice){
       return "tie";
    } else if (
    (getUserChoice === "rock" && getComputerChoice === "scissors") ||
    (getUserChoice === "paper" && getComputerChoice === "rock") || 
    (getUserChoice === "scissors" && getComputerChoice === "paper") 
    ){
        return "player wins"
    } else {
        return "computer wins"
    }
}
   



function playGame() {
    const userChoice = getUserChoice ();
    const computerChoice = getComputerChoice();
    console.log("you threw " +  userChoice);
    console.log ("computer threw " +   computerChoice);
    console.log (determineWinner (userChoice, computerChoice));

}

console.log(playGame())









// console.log(getUserChoice('rock'))
// for getUserChoice, if there is only one parameter, you dont need parantheses. parentheses is used when there is more thaone parameter
// .toLowercase puts userinput into lower case 
// if the choces are true, we will return the userInput