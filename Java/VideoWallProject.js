var x1 = 830;
var y1 = 575;
var x2 = 858;
var y2 = 520;
var x3 = 886;
var y3 = 575;
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
var keyIsPressed;



function preload()
{
    bg = loadImage('./Assets/StarBackground.jpg')
    img = loadImage('./Assets/Astroid.png')
    img1 = loadImage('./Assets/UFO.png')


    result = loadStrings('Assets/explosion.png');
    runresult = loadStrings('Assets/explosion.png');
     for(var i = 0; i < result.length; i++)
    {
     AstroidObjects.push(new imageclass(result[i], 0, 0));
    }
    for(var i = 0; i < runresult.length; i++)
    {
        AstroidRunObjects.push(new imageclass(runresult[i], 0, 0));
    }
}



function setup() 
{
    createCanvas(displayWidth, displayHeight);
    speedX = random(1, 10);
    speedY = random(1, 10);

    var h = window.displayHeight;
    var w = window.displayWidth
    //AStroid Create
    for(var i = 0; i < astroidSize; i++)
    {
        astroid[i] = img;
        astroidX = random(0,w);
        astroidY = random(0,h);
        astroidXs[i] = astroidX;
        astroidYs[i] = astroidY;
        flySpeedXs[i] = floor(random(-10,10));
        flySpeedYs[i] = floor(random(-10,10));
    }
}

function draw() 
{
    
    background(bg);
    
    //image(img, 200, 200);
    image(img1, 200, 400); 
    Player = triangle(x1, y1, x2, y2, x3, y3);
    //Rotate ship
function keyIsPressed()
{
    if (keyIsPressed("a")) 
    {
      Player.rotation -= 4;
    }
    if (keyIsPressed("d"))
    {
      Player.rotation += 4;
    }
}

    //Draw and move astroid
    for(var k = 0; k < astroid.length; k++)
    {
    image(astroid[k],
        astroidXs[k], astroidYs[k]);
        astroidXs[k] += flySpeedXs[k]
        //Keeping in bounds
        if(astroidXs[k] <= 0 || astroidXs[k] >= displayWidth)

        {
            flySpeedXs[k] *= -1
        }

        astroidYs[k] += flySpeedYs[k] 
        if(astroidYs[k] <= 0 || astroidYs[k] >= displayHeight)
        {
            flySpeedYs[k] *= -1
        }

    }
    
    //shoot 


   // timer++;
    /*if(timer == 120)
    {
        timer = 0
    }*/


   /* if (x >= 800)
    {
        speedX = random(1, 10);
        speedX = -speedX;
    }
    else if (y >= 600 )
    {
        speedY = random(1, 10);
        speedY = -speedY;
    }
    else if(y < 0)
    {
        speedY = random(1, 10)
    }
    x = x + speedX
    y = y + speedY;*/
}

function incrementIndex()
{
     
     i += 1;

     
     if (i >= animation.length) {
         i = 0;
     }
}