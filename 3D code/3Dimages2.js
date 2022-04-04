
let House;
let Texture
var rotateSpeed = .01;
var houseX = 10;
var houseY = 10;

var houseX2 = 200;
var houseY2 = 200;

var boxTranslationX = -100;
var boxTranslationY = -100;

function preload() 
{
  
  House = loadModel('assets/3D House.stl', true);
  Texture = loadImage('assets/grass.jpg');
}

function setup() 
{
  createCanvas(1000, 1000, WEBGL);
}

function draw() 
{
  background(200);
push();
  translate( houseX,houseY,-500);
  scale(2); 
  rotateX(frameCount * rotateSpeed);
  rotateY(frameCount * rotateSpeed);
  normalMaterial(); 
  noStroke();
  texture(Texture);
  model(House);
pop();



push();
translate(-300, -200);
rotateX(frameCount * 0.01);
rotateY(frameCount * 0.01);
texture(texture);
cone(100, 70);
pop();


push();
translate(-250, 150);
rotateX(frameCount * 0.01);
rotateY(frameCount * 0.01);
texture(texture);
ellipsoid(30, 40, 140);
pop();

push();
translate(150, -150);
rotateX(frameCount * 0.01);
rotateY(frameCount * 0.01);
texture(texture);
torus(30, 15);
pop();

push();
translate(150, -150);
rotateX(frameCount * 0.01);
rotateY(frameCount * 0.01);
texture(texture);
torus(50, 15);
pop();

if (mouseIsPressed) 
  {
  boxTranslationX = 0;
  boxTranslationY = 0;
  boxTranslationX = floor(random(600));
  boxTranslationY = floor(random(400));
  }

}

function mousePressed()
{
    rotateSpeed += .5;
}

function mouseReleased()
{
    rotateSpeed -= .5;
}

function mouseDragged()
{
    houseX = mouseX-width/2;
    houseY = mouseY-height/2;
}
