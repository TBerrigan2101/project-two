const buttons = document.getElementsByClassName("btn");
const playerImage = document.getElementById("player-image");
const computerImage = document.getElementById("computer-image");
const choices = ["square", "circle", "star", "plus-sign", "wavy-lines"]
const correctReply = ["Incredible", "Amazing", "You can’t see these can you?", "You are a legitimate phenomenon", "You’re no fluke"]
const wrongReply = ["Good guess, but wrong", "Oooh close. But definitely wrong.", "Sorry, this isn’t your lucky day", "Do you even want the five bucks?", "Do I have to shock you again?"]



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
    


