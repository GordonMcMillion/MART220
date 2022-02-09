var x1 = 230;
var y1 = 275;
var x2 = 258;
var y2 = 220;
var x3 = 286;
var y3 = 275;
var bg;
var y = 0;
var img;
var img1;
var imgx = 0;
var img1y = 0;
var speedX = 0;
var speedY = 0;
var astroid = [];
var astroidXs = [];
var astroidYs = [];
var flySpeedXs = [];
var flySpeedYs = [];
var astroidSize = 20
var astroidX = 0;
var astroidY = 0;


function preload()
{
    bg = loadImage('./Assets/StarBackground.jpg')
    img = loadImage('./Assets/Astroid.jpg')
    img1 = loadImage('./Assets/UFO.jpg')
}
function setup() 
{
    createCanvas(displayWidth, displayHeight);
    speedX = random(1, 10);
    speedY = random(1, 10);

    var h = window.displayHeight;
    var w = window.displayWidth

    for(var i = 0; i < astroidSize; i++)
    {
        astroid[i] = img;
        astroidX = random(0,w);
        astroidY = random(0,h);
        astroidXs[i] = astroidX;
        astroidYs[i] = astroidY;
        flySpeedXs[i] = random(-10,10);
        flySpeedYs[i] = random(-10,10)
    }
}

function draw() 
{
    
    background(bg);
    image(img, 200, 200);
    image(img1, 200, 400); 
    triangle(x1, y1, x2, y2, x3, y3);
}