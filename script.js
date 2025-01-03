const gameContainerEl = document.querySelector(".gameContainer");
const hShipEl = document.getElementById("hShip");
let aShipEl = document.getElementById("aShip");

const startGameBtnEl = document.getElementById("startGameBtn");
const textContentEl = document.getElementById("textContent");
const gameContainerElWidth = gameContainerEl.offsetWidth;
const gameContainerElHeight = gameContainerEl.offsetHeight;
console.log(gameContainerElWidth,gameContainerElHeight);
console.log(aShipEl.width,aShipEl.height);
startGameBtnEl  .addEventListener("click",function()
{
    startGameBtnEl.style.backgroundColor="red";
    textContentEl.textContent = "Game..... started";
    
    let xPosition = Math.floor(Math.random() * (gameContainerElWidth-aShipEl.width));
    let yPosition = Math.floor(Math.random() * (gameContainerElHeight-aShipEl.height));
    console.log(xPosition,yPosition);
    aShipEl.style.position="absolute";
    aShipEl.style.top = yPosition+'px';
    aShipEl.style.left = xPosition+'px';
    // console.log(aShipEl.style.top);

});