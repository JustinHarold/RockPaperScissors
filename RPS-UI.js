const randomDisplay = document.getElementById("random")
const playerChoiceDisplay = document.getElementById("playerchoice")
const resultDisplay= document.getElementById("result")
const possibleChoices = document.querySelectorAll('button')
let userChoice
let randomone
let results

// picked up spans by elementID and saved it to a const name
// querySelectorAll picks up all the button elements 

possibleChoices.forEach(button => button.addEventListener('click', (e) => {
    userChoice = e.target.id
    playerChoiceDisplay.innerHTML = userChoice
    getComputerChoice()
    getResult()
    
  
}))

// we are going to grab the buttons. code says for each possible choice/button, we are going to grab each possible choice
// grabbing button with => and add eventlistener to listen for a click
// clicking any of the buttons makes something happen 
// we pass through event (e) and get target id ("rock", "paper", "scissors") and save it as user choice
// we save userchoice globally to have global access
// we now take playerChoiceDisplay and use the proppertyies of innerHTML to display the id taken up by userChoice


function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 4);

    if (randomNumber === 1) {
         randomone= "rock";
    }
   else if (randomNumber === 2) {
         randomone= "paper";
   }
  else  if (randomNumber === 3) {
         randomone = "scissors";
   }
   randomDisplay.innerHTML = randomone
}

function getResult() {
    if (randomone === userChoice) {
        results = "tie"
    } else if 
        ((randomone === "rock" && userChoice === "scissors") ||
        (randomone === "paper" && userChoice=== "rock") || 
        (randomone === "scissors" && userChoice=== "paper")){
            results = "You Win!";
        }
    else results = "You Loose!"

    resultDisplay.innerHTML= results
}
