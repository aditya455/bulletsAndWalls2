var bullet,wall;
var speed,weight;
var thickness;


function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

//console.log(speed);
//console.log(weight);
//console.log(thickness);

  bullet =  createSprite(50, 200, 50, 10);
  bullet.shapeColor = "white";
  bullet.velocityX = 7;

 wall =  createSprite(1200, 200, thickness, width/2);
 wall.shapeColor = "cyan"

}


function draw() {
  background("black");


//if(wall.x-bullet.x < (bullet.width + wall.width)/2){
//  bullet.velocityX = 0;
//
// var deformation = 0.5 * weight * speed * speed/22509;
//console.log(deformation);
//  if(deformation>180){
// bullet.shapeColor = "red";
//  }
//
//  if(deformation<180 && deformation >100){
//    bullet.shapeColor = "yellow";
//  }
//
// if(deformation<100){
//    bullet.shapeColor = "orange";
//  }
//

  drawSprites();

  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
      var damage = 5  // * weight*speed*speed/(thickness*thicknes*thickness);
  console.log(damage);
      if(damage>10){
     wall.shapeColor = "red";
      }
  
      if(damage<10){
        wall.shapeColor = "green";
         }
     }
    }

 // hasCollided();

  


function hasCollided(bullet,wall){

//console.log(bullet);

bulletRightEdge =  bullet.x + bullet.width;
wallLeftEdge= wall.x;

console.log(bulletRightEdge);
console.log(wallLeftEdge);
if(bulletRightEdge>=wallLeftEdge){
  //console.log("hi");

  return true;
  }
  else {
 //   console.log("hello");
    return false;
  }
}
