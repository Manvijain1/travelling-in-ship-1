var ship,ship_running;
var sea,seaImg;


function preload(){

  ship_running = loadAnimation("ship1.png", "ship2.png", "ship3.png", "ship4.png");

  seaImg = loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);

  sea = createSprite(200,200)
  sea.addImage("sea",seaImg)
  sea.velocityX  = -2
  sea.x = sea.width/2;

  ship = createSprite(50,180,10,40);
  ship.addAnimation("running",ship_running);
}

function draw() {
  background("blue");

  if (sea.x  < 0){
    sea.x = sea.width/2;
  }
  
 drawSprites();
}