const choices = ["rock", "paper", "scissors"]
// Global variable is equal to an array []
// an array is a list of elements such as varables, numbers , strings, functions, object etc
// arrays work differently on how you intuitively think about them, meaning a index of [0] is the first item (rock)
// index of [1] is the second (paper) and [2] is the 3rd (scissors)

function game() {
    playRound();
}


function playRound() {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    // we are setting variable const too computerSelection function, which will return one of the 3 values 0-2
}

function playerChoice () {
    let input = prompt("Type Rock, Paper, or Scissors");
    while(input == null) {
        input = prompt("type Rock, Paper, or Scissors")
    }
    input = input.toLowerCase();
    let check = validateInput(input)
    while(check == false) {
        prompt ("type Rock, paper, or scissors, capitalization doesnt matter")
    }
        console.log(input)
    //get input from user
    // This will ge the input and input it on all lowercase
    // while loop will make it so they cannot press cancel and break the program
}

function computerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]; 
        //get input from computer
        // Math.floor will take an integer and round it down (1.99=1, 2.5=2)
        // math.random will give a number between 0 and 1 but it will never be 1, it will always be less than 1 (0.99)
        // choices.length is 3 (rock paper scissors), so math.random is multipled by choices length
        // this means the results will be between 0-2.999
        // the highest index we have is 2 and since math.floor rounds it down, our return will be between our indexes (rock 0, paper 1, scissors 2)
}

function validateInput(choice){
    return(choices.includes(choice))
    }
// This function will check the input to make sure it is one of the 3 choices
// we take in an argument (choice) as a paramater
// we just need to check if what they type in as the imput is contained within the element in line 1
// previously it was if(choices.includes(choice)){
//  return true;
// } else {
// return false;
// but we can actually take off else and it will run the same way because it will check if choices array include this and it will return true, when it returns something the function immedietly ends, function will not run anymore. if it doesnt return true, the check will fail and it will return false
// we can simplify a little more and get rid of the whole thing and add a return on choices
// the simpler version with return to make it so if choices include choice it will return true, if not then return false
//



game();