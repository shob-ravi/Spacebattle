const gameContainerEl = document.querySelector(".gameContainer");
const topContainerEl = document.querySelector(".topContainer");
const alienShipEl = document.querySelector(".alienShip");
const hShipEl = document.getElementById("hShip");
let aShipEl = document.getElementById("aShip");

const startGameBtnEl = document.getElementById("startGameBtn");
const textContentEl = document.getElementById("textContent");
const alienShipElWidth = alienShipEl.offsetWidth;
const alienShipElHeight = alienShipEl.offsetHeight;
let hShipElHeight = topContainerEl.offsetHeight -hShipEl.height - 10;
let hShipElWidth = topContainerEl.offsetWidth/2 -hShipEl.width/2;
startGameBtnEl  .addEventListener("click",function()
{
    startGameBtnEl.style.backgroundColor="red"; 
    textContentEl.textContent = "Game..... started";
    
    let xPosition = Math.floor(Math.random() * (alienShipElWidth-aShipEl.width));
    let yPosition = Math.floor(Math.random() * (alienShipElHeight-aShipEl.height));
    
    
    aShipEl.style.position="absolute";
    aShipEl.style.top = yPosition+'px';
    aShipEl.style.left = xPosition+'px'; 
    console.log(hShipElHeight,hShipElWidth)  ;
    hShipEl.style.position="absolute";
    hShipEl.style.top = hShipElHeight+'px';
    hShipEl.style.left = hShipElWidth+'px';
    
});