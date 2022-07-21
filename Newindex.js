const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultsDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getRestuls()
}))

// everytime you click it pretty much does all of these 

// click passes through the function (e) for event 
// e will get target.id - ID is rock paper scissors 
// it is then saved on user choice
// saving it globally on line 5 will mean we can access it wherever


function generateComputerChoice() {
    const randomNumber =[Math.floor(Math.random() * choices.length)]

    if (randomeNumber === 0) {
        computerChoice = 'rock'
    }
    if (randomeNumber === 1) {
        computerChoice = 'paper'
    }
    if (randomeNumber === 2) {
        computerChoice = 'scissors'
    }
} 
function getRestuls() {
    if (computerChoice === userChoice) {
        results = "its a draw!"
    }
    if (computerChoice === 'rock' && userChoice === 'paper') {
        results = "you win!"
    }
    if (computerChoice === 'rock' && userChoice === 'scissors') {
        results = "you lost!"
    }  
    if (computerChoice === 'paper' && userChoice === 'scissors') {
        results = "you win!"
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        results = "loose!"
    }
    

}