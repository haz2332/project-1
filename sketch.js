var ball
function setup() {
  createCanvas(400,400);
  ball=createSprite(200,200);
}


function draw() 
{
  
  background("blue");
  
  if(keyDown("right")){
    ball.x=ball.x+2;
  }

  
  
  
  drawSprites()

}




