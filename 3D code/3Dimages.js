

function setup() 
{
  createCanvas(1000, 1000, WEBGL);
}
//thing

function draw() 
{
  background(120);
  normalMaterial();
  createTorus();
  createBox();
  createCylinder();
  createCone();
}

function createTorus()
{
    push();
    translate(100, 100);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    torus(50, 15, 24, 16);
    pop();
}

function createBox() 
{
    push();
    translate(-200, -200);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    box(50);
    pop();
}

function createCylinder()
{
    push();
    traslate(400, -400);
    rotateX(frameCount * 0.01);
    rotateZ(frameCount * 0.01);
    cylinder(20, 50);
    pop()
}

function createCone()
{
    push();
    translate(200, -200);
    rotateX(frameCount * 0.01);
    rotateZ(frameCount * 0.01);
    cone(40, 70);
    pop();
}

function draw() 
{
    push();
    translate(300, -300);
    ellipsoid(30, 40, 40);
    pop();
}


