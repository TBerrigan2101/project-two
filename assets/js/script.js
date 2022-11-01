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

    computerChoice = Math.floor(Math.random() * 5);

    computerImage.src = `assets/images/${choices[computerChoice]}.png`;
    computerImage.alt = choices[computerChoice];

}
