//Simple Character Assignment Due 10/9
var CenterX = 0;
var CenterY = 0;
var changeBColor;
var fSize = 200;

function preload() {
    
    bgImage = loadImage("assets/swamp.jpg");
    bgImage2 = loadImage("assets/forest.jpg");
}



function setup() {
   createCanvas(1000, 500);
    
  

    posX = width/2;
    posY = 100;
    
    // bgColor = color(255, 0, 0);
    
      // background(bgImage);

    
 currentBgImage = bgImage;
    
    bgChange = createButton("swamp");
    bgChange.position(300,550);
bgChange.mousePressed(changeBg2Func);
    
    bgChange2 = createButton("forest");
    bgChange2.position(400,550);
   bgChange2.mousePressed(changeBgFunc);
    
    
    
}

function draw(){
    
   // background(bgColor);
    
   // background(bgImage);
    
    image(currentBgImage, 0,0, 900, 900);
    
    
        centerX = mouseX;
        centerY = mouseY;
    
    
    
    strokeWeight(2);
    
     var bodyWiggle = map(mouseX,0,width,-50,50);
   // console.log("noseWiggle: " + noseWiggle);
    
    var bodyWiggleY = map(mouseY, 0, height, 0,50);
    
         var bodyWiggle2 = map(mouseX,0,width,-60,60);
   // console.log("noseWiggle: " + noseWiggle);
    
    var bodyWiggleY2 = map(mouseY, 0, height, 0,60);
    
    
        //body
       fill("green");
    ellipse(posX-450 + bodyWiggle, posY+110 + bodyWiggleY, fSize, fSize)
    
       fill("#6CE540");
    ellipse(posX-400 + bodyWiggle2, posY+110 + bodyWiggleY2, fSize, fSize)
    
      fill("green");
    ellipse(posX-360 + bodyWiggle, posY+110 + bodyWiggleY, fSize, fSize)
    
       fill("#6CE540");
    ellipse(posX-320 + bodyWiggle2, posY+110 + bodyWiggleY2, fSize, fSize)
    
        fill("green");
    ellipse(posX-280 + bodyWiggle, posY+100 + bodyWiggleY, fSize, fSize)
    
      fill("#6CE540");
    ellipse(posX-250 + bodyWiggle2, posY+140 + bodyWiggleY2, fSize, fSize)
    
    fill("green");
    ellipse(posX-230 + bodyWiggle, posY+170 + bodyWiggleY, fSize, fSize)
    
    fill("#6CE540");
    ellipse(posX-190 + bodyWiggle2, posY+190 + bodyWiggleY2, fSize, fSize)
    
    fill("green");
    ellipse(posX-150 + bodyWiggle, posY+200 + bodyWiggleY, fSize, fSize)
    
     fill("#6CE540");
    ellipse(posX-110 + bodyWiggle2, posY+130 + bodyWiggleY2, fSize, fSize)
    
    fill("green");
    ellipse(posX-70 + bodyWiggle, posY+70 + bodyWiggleY, fSize, fSize)
    
    
    
    
       //nose
    var noseWiggle = map(mouseX,0,width,-40,40);
   // console.log("noseWiggle: " + noseWiggle);
    
    var noseWiggleY = map(mouseY, 0, height, 0,40);
    
   
    
    //Face
    fill("#6CE540");
    ellipse(posX -10 + noseWiggle, posY + 10 + noseWiggleY, fSize, fSize);

    
    //mouth
    fill("black");
    //rect(posX- 50, posY+ 50, 100,20);
    ellipse(posX + noseWiggle, posY + 40 + noseWiggleY, 30, 30);
    
       strokeWeight(0);
    //eyes
    fill("white");
    ellipse(posX - 30 + noseWiggle, posY - 20 + noseWiggleY, 25, 45);
    ellipse(posX + 30 + noseWiggle, posY - 20 + noseWiggleY, 25, 45);
 
    
    //pupils
    fill("black");
    ellipse(posX - 30 + noseWiggle, posY - 20 + noseWiggleY, 15, 35);
    ellipse(posX + 30 + noseWiggle, posY - 20 + noseWiggleY, 15, 35);
     strokeWeight(3);
    
    //mouthline
    //line(posX - 50, posY + 60, posX + 50, posY + 60);
}
  
    function changeBgFunc(){
        currentBgImage = bgImage2;
    }
    
    
    function changeBg2Func(){
        currentBgImage = bgImage;
    }

    
    function mousePressed(){
   console.log("mousePressed");
    bgColor = color(0, 255, 0);


  
      
}

    
//

    

    