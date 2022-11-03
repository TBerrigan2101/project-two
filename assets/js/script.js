const buttons = document.getElementsByClassName("btn");
const playerImage = document.getElementById("player-image");
const computerImage = document.getElementById("computer-image");
const choices = ["square", "circle", "star", "plus-sign", "wavy-lines"]



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

}

function increaseComputerScore() {

    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;
    
}

