const buttons = document.getElementsByClassName("btn");
const playerImage = document.getElementById("player-image");
const computerImage = document.getElementById("computer-image");
const choices = ["square", "circle", "star", "plus-sign", "wavy-lines"]
const correctReply = ["Incredible", "Amazing", "You can’t see these can you?", "You are a legitimate phenomenon", "You’re no fluke"]
const wrongReply = ["Good guess, but wrong.", "Oooh close. But definitely wrong.", "Sorry, this isn’t your lucky day", "Do you want the five bucks?", "Do I have to shock you again?"]
const intervalText = ["Clear your head", "Nervous?", "What is it?", "Come on!", "Think hard. What is it?"]



for (let button of buttons) {
    button.addEventListener("click", function() {
       let playerChoice = this.getAttribute("data-type");
       playGame(playerChoice);
    }); 
}

function playGame (playerChoice) {

    playerImage.src = `assets/images/${choices[playerChoice]}.png`;
    playerImage.alt = choices[playerChoice];

    let computerChoice = Math.floor(Math.random() * 5);

    computerImage.src = `assets/images/${choices[computerChoice]}.png`;
    computerImage.alt = choices[computerChoice];

    let result = checkResult(choices[playerChoice], choices[computerChoice]);

    setTimeout(resetGame, 3500);
        

}

function checkResult (playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        increasePlayerScore();
    } else {
        increaseComputerScore();
    }

}


function increasePlayerScore() {

    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;

    let response = Math.floor(Math.random() * 5);
    let correctResponse = correctReply[response];
    document.getElementById("computer_response").innerText = correctResponse;

}

function increaseComputerScore() {

    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;

    let incorrectResponse = Math.floor(Math.random() * 5);
    let wrongResponse = wrongReply[incorrectResponse];   
    document.getElementById("computer_response").innerText = wrongResponse;

}
    
function resetGame () {

    playerImage.src = `assets/images/player-image.png`;

    computerImage.src = `assets/images/computer-image.png`;

    let intervalResponse = Math.floor(Math.random() * 5);
    let nextGuess = intervalText[intervalResponse];
    document.getElementById("computer_response").innerText = nextGuess;

    }