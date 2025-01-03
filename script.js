const gameContainerEl = document.querySelector(".gameContainer");
const topContainerEl = document.querySelector(".topContainer");
const alienShipEl = document.querySelector(".alienShip");
const hShipEl = document.getElementById("hShip");
const bulletEl = document.createElement("div");
bulletEl.style.borderRadius = '50%';
bulletEl.style.width='20px';
bulletEl.style.height='20px';
bulletEl.style.backgroundColor='red';
topContainerEl.appendChild(bulletEl);
let bulletElHeight = topContainerEl.offsetHeight-hShipEl.height -20;
let bulletElWidth = topContainerEl.offsetWidth/2 ;
const circles=[];
bulletEl.style.position="absolute";
bulletEl.style.top = bulletElHeight+'px';
bulletEl.style.left = bulletElWidth+'px';

let aShipEl = document.getElementById("aShip");
let xVelocity =0;
let yVelocity =0;
const startGameBtnEl = document.getElementById("startGameBtn");
const textContentEl = document.getElementById("textContent");
const alienShipElWidth = alienShipEl.offsetWidth;
const alienShipElHeight = alienShipEl.offsetHeight;
let hShipElHeight = topContainerEl.offsetHeight -hShipEl.height - 1;
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
    console.log(hShipElWidth,hShipElHeight)  ;
    hShipEl.style.position="absolute";
    hShipEl.style.top = hShipElHeight+'px';
    hShipEl.style.left = hShipElWidth+'px';
    
});
function PositionUpdate1(xVelocity){
    
    let newPosition = parseInt(hShipEl.style.left);
    // console.log("console.log(newPosition)",newPosition);    
    newPosition+= xVelocity;
    console.log(newPosition);
    if (newPosition>=0)
    hShipEl.style.left = newPosition+'px';    
}
function PositionUpdate2(xVelocity){
    
    let newPosition = parseInt(hShipEl.style.left);
    // console.log("console.log(newPosition)",newPosition);    
    newPosition+= xVelocity;
    console.log(newPosition);
    if (newPosition+hShipEl.width <=topContainerEl.offsetWidth)
    hShipEl.style.left = newPosition+'px';    
}
function PositionUpdate3(xVelocity,yVelocity){
    
    let newPosition_x = parseInt(bulletEl.style.left);
    let newPosition_y = parseInt(bulletEl.style.top);
    console.log("console.log(newPosition)",newPosition_x,newPosition_y);    
    newPosition_x+= xVelocity;
    newPosition_y+= yVelocity;
    console.log(newPosition_x,newPosition_x);
    
    bulletEl.style.left = newPosition_x+'px';    
    bulletEl.style.top = newPosition_y+'px';  
}
addEventListener('keydown',(event)=>{
    console.log(event);
    switch(event.key)
    {
        case 'a':
            console.log('left');
            PositionUpdate1(-15);
            break
        case 'd':
            console.log('right');
            PositionUpdate2(15);
            break
        case ' ':
            console.log('space bar');
            // circles.forEach(item=>PositionUpdate3(0,-5));
            PositionUpdate3(0,-5);
            break
        
    }
})