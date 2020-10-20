var car , carImage , wall;
var speed , weight;

function preload(){
  carImage = loadAnimation("55fd62472156abf0c985a31f7c7dcb5a40134c43.gif");
}
function setup() {
  createCanvas(1600,600);
  speed = random(55,90);
  weight = random(400,1500);

  car = createSprite(50,300,50,50);
  car.addAnimation("car", carImage);
  car.scale = 1;
  car.debug = true;
  car.setCollider("rectangle",0,0,car.width,car.height);
  //car.shapeColor = "white";
  car.velocityX = speed;

  wall = createSprite(1500,300,60,height/2);
  wall.shapeColor = color(80,80,80);
  wall.debug = true;
  
}

function draw() {
  background("gray");  
  drawSprites();
  if(wall.x-car.x < (car.width+wall.width)/2)
  {
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22509;
    if(deformation>180)
    {
      car.tint = color(255,0,0);
    }

    if(deformation<180 && deformation>100)
    {
      car.tint = color(230,230,0);
    }

    if(deformation<100)
    {
      car.tint = color(0,255,0);
    }
  }
}