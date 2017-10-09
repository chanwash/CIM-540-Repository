//Simple Character Assignment Due 10/9

var bgColor = "teal";
var fSize = 200;



function setup() {
   createCanvas(1000, 500);
    
    background(125);
    background(255,0,0);
    background("#333333");
    background("cyan");
    
    background(bgColor);

    posX = width/2;
    posY = 100;
    
}

function draw(){
    strokeWeight(2);
    
        //body
       fill("green");
    ellipse(posX-450, posY+110, fSize, fSize)
    
       fill("#6CE540");
    ellipse(posX-400, posY+110, fSize, fSize)
    
      fill("green");
    ellipse(posX-360, posY+110, fSize, fSize)
    
       fill("#6CE540");
    ellipse(posX-320, posY+110, fSize, fSize)
    
        fill("green");
    ellipse(posX-280, posY+100, fSize, fSize)
    
      fill("#6CE540");
    ellipse(posX-250, posY+140, fSize, fSize)
    
    fill("green");
    ellipse(posX-230, posY+170, fSize, fSize)
    
    fill("#6CE540");
    ellipse(posX-190, posY+190, fSize, fSize)
    
    fill("green");
    ellipse(posX-150, posY+200, fSize, fSize)
    
     fill("#6CE540");
    ellipse(posX-110, posY+130, fSize, fSize)
    
    fill("green");
    ellipse(posX-70, posY+70, fSize, fSize)
    
     
    
    
    
    //Face
    fill("#6CE540");
    ellipse(posX -10, posY + 10, fSize, fSize);
    
    //mouth
    fill("black");
    //rect(posX- 50, posY+ 50, 100,20);
    ellipse(posX, posY + 40, 30, 30);
    
       strokeWeight(0);
    //eyes
    fill("white");
    ellipse(posX - 30, posY - 20, 25, 45);
    ellipse(posX + 30, posY - 20, 25, 45);
 
    
    //pupils
    fill("black");
    ellipse(posX - 30, posY - 20, 15, 35);
    ellipse(posX + 30, posY - 20, 15, 35);
     strokeWeight(3);
    
    //mouthline
    //line(posX - 50, posY + 60, posX + 50, posY + 60);
    strokeWeight(7);
    
  
    
}