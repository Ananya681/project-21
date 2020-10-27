var speed,thickness;
var bullet,speed,weight;

function setup () {
  createCanvas(1600,400);

  speed = random(50,90)
  weight = random(400,1500)
  thickness = random(22,83);

  bullet = createSprite(50,200,50,5);
  bullet.shapeColor = "white";
  bullet.velocityX=speed; 

  wall = createSprite(width-thickness,170,thickness,height/2);
  wall.shapeColor = "black";
}

function draw (){
  background("lightblue");
  
  if(hasCollided(bullet,wall))
  {
    bullet.velocityX = 0;
    var damage  = 0.5 * weight * speed/(thickness*thickness*thickness);


    if ( damage >10)
    {
    wall.shapeColor = "red";
     text("UnSafe!!",400,100)
      }

    if (damage < 10)
    {
      wall.shapeColor = "green";
      text("Defend!!",400,10)
    }
  }
  drawSprites();
}

function hasCollided(lbullet,lwall)
{
bulletRightEdge = lbullet.x + lbullet.width;
wallLeftEdge = lwall.x
}
if(bulletRightEdge >= wallLeftEdge)
{
  return true;
}
return false;