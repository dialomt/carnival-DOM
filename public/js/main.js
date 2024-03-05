import { saveName, playAnonymously } from "./formUser.js";
import { showInstructions } from "./instructions.js";
import { launchGame } from "./game.js";
import { restartGame } from "./endgame.js"


const saveNameButton = document.getElementById("saveName");
const btnPlayAnonymously = document.getElementById("playAnonymously");
const howToPlayButton = document.getElementById("howToPlayButton");
const restartButton = document.getElementById("restartButton");
//
const contentGame = document.getElementById("contentGame")
const startButton = document.getElementById("startButton")
const instructionsAndPlay = document.getElementById("instructionsAndPlay")


saveNameButton.addEventListener("click", (event) => {
    saveName(event);
});

btnPlayAnonymously.addEventListener("click", () => {
    playAnonymously();
});

howToPlayButton.addEventListener("click", () => {
    showInstructions(howToPlayButton);
})

//
startButton.addEventListener("click" ,() => {
    instructionsAndPlay.style.display = "none"
    contentGame.style.display = "block"
    launchGame();
})

restartButton.addEventListener("click", ()=> {
    restartGame()
})
