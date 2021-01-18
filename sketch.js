var fixedRect, movingRect;
var gob1, gob2; 

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gob1 = createSprite(400,100,80,50);
gob1.shapeColor = "green";

gob2 = createSprite(500,100,80,50);
gob2.shapeColor = "green";

}



function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

if(isTouching(movingRect,gob2)){
text("touching",600,200);
}
  drawSprites();
}




