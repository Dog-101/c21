//Program to make algorithm for collision sprites
var ball, wall, wall2;

function setup()
{
    createCanvas(1000,600)

    ball=createSprite(200,100,50,50);
    wall=createSprite(800,200,60,1000);
    wall2=createSprite(100,200,60,1000);
    ball.shapeColor=wall.shapeColor="yellow";
    ball.shapeColor=wall2.shapeColor="yellow";
    ball.velocityX=14;
    ball.velocityY=10;


}
function draw()
{
    background(0);
     console.log("Width Gap " + (ball.x-wall.x )+ " "+(ball.width/2+wall.width/2))
     console.log("Height Gap "+ (ball.y-wall.y )+ " " +(ball.height/2+wall.height/2))
     isColliding(ball,wall);
     isColliding(ball,wall2);
   
     //collision algorithm
    
    drawSprites();
}

