let buttons = document.getElementsByClassName("btn");
let playerImage = document.getElementById("player-image");
let computerImage = document.getElementById("computer-image");
const choices = ["square", "circle", "star", "plus-sign", "wavy-lines"]
const correctReply = ["Incredible!", "Amazing!", "You can’t see these can you?", "You are a legitimate phenomenon!", "You’re no fluke!"];
const wrongReply = ["Good guess, but wrong.", "Oooh close. But definitely wrong.", "Sorry, this isn’t your lucky day", "Do you want the five bucks?", "Do I have to shock you again?"];

/**
 * Selects the buttons and adds the event listener for the click function to start the game
 */

for (let button of buttons) {
    button.addEventListener("click", function() {
       let playerChoice = this.getAttribute("data-type");
       playGame(playerChoice);
    }); 
}

/**
 * Processes the user choice based on the button selected, noting the image and data type.
 * Generates the computer choice based on a random number generator up to five and uses the result 
 * to select an option from 'choices' and its corresponding image.
 * The function the compares the choices of the user and computer to get the result
 */

function playGame (playerChoice) {

    playerImage.src = `assets/images/${choices[playerChoice]}.png`;
    playerImage.alt = choices[playerChoice];

    let computerChoice = Math.floor(Math.random() * 5);

    computerImage.src = `assets/images/${choices[computerChoice]}.png`;
    computerImage.alt = choices[computerChoice];

    let result = checkResult(choices[playerChoice], choices[computerChoice]);
        

}


/**
 * Processes the result and either increases the player score if they are correct or the computer score if the player is wrong
 */

function checkResult (playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        increasePlayerScore();
    } else {
        increaseComputerScore();
    }

}

/**
 * This function gets the current score from the DOM and increments it by 1 if the player chose the right card.
 * The computer generates a congratulatory answer using a random number generator and uses the result 
 * to select an option from 'correctReply'.
 */


function increasePlayerScore() {

    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;

    let response = Math.floor(Math.random() * 5);
    let correctResponse = correctReply[response];
    document.getElementById("computer_response").innerText = correctResponse;

}

/**
 * This function gets the current score from the DOM and increments it by 1 if the player chose the wrong card.
 * The computer generates a commiserating answer using a random number generator and uses the result 
 * to select an option from 'wrongReply'.
 */

function increaseComputerScore() {

    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;

    let incorrectResponse = Math.floor(Math.random() * 5);
    let wrongResponse = wrongReply[incorrectResponse];   
    document.getElementById("computer_response").innerText = wrongResponse;

}
    
    