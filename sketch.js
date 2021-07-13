var ship;
var shipImage;
var seaImage;

function preload(){
shipImage= loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
seaImage=loadImage("sea.png");
}

function setup(){
createCanvas(400,400);

sea=createSprite(200,200,100,100);
sea.addImage(seaImage);
sea.scale=0.2359;

// creating ship
ship = createSprite(200,190,20,50);
ship.addAnimation("add", shipImage);
ship.scale=0.3;

}

function draw() {
// set backgroung color
background("0");

  sea.velocityX=-3;
  if(sea.x < 0){
   sea.x = sea.width/10;
  }
 drawSprites();
}