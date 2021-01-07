function isColliding(ball,wall){
    if(Math.abs(ball.x-wall.x)<=(ball.width/2+wall.width/2) && (Math.abs(ball.y-wall.y)<=(ball.height/2+wall.height/2))){
      ball.velocityX*=-1;
        ball.velocityY*=-1;
    wall.shapeColor="red";

    }}
