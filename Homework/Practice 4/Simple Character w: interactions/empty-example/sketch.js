
var CenterX = 0;
var CenterY = 0;
var changeBColor;
var fSize = 200;
var pics = [];
var targetPosX = [100, 300, 500];
var targetPosY = 100;
var red1, green1, blue1;
var linePoints = [0, 0, 400, 0];




//add in sliders to change color 



function preload() {
    
    bgImage = loadImage("assets/swamp.jpg");
    bgImage2 = loadImage("assets/forest.jpg");
}



function setup() {
   createCanvas(1000, 500);
    
    
     var red1 = createP("Red");
    hRedColor = createSlider(0, 255, 0);
    var black1 = createP("Green");
    hGreenColor = createSlider(0, 255, 0);
    var blue1 = createP("Blue");
    hBlueColor = createSlider(0, 255, 0);
    
    
    
    pics[0] = loadImage("assets/snake1.png");

     pics[1] = loadImage("assets/snake2.png");

     pics[2] = loadImage("assets/snake3.png");
    
    
   


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
    
    background(255);
    
    
    
    
    
    

    
    
   // background(bgColor);
    
   // background(bgImage);
    
    image(currentBgImage, 0,0, 900, 900);
    
    
        centerX = mouseX;
        centerY = mouseY;
    

    
    strokeWeight(2);
    
    
    
     var bodyWiggle = map(centerX,0,width,-130,130);
   // console.log("noseWiggle: " + noseWiggle);
    
    var bodyWiggleY = map(centerY, 0, height, 0,130);
    
         var bodyWiggle2 = map(centerX,0,width,-130,130);
   // console.log("noseWiggle: " + noseWiggle);
    
    var bodyWiggleY2 = map(centerY, 0, height, 0,130);
    
  
    
    
        //body
     fill("green");
    ellipse(centerX-450 + bodyWiggle, centerY+110 + bodyWiggleY, fSize, fSize)
    
       fill("#6CE540");
    ellipse(centerX-400 + bodyWiggle2, centerY+110 + bodyWiggleY2, fSize, fSize)
    
      fill("green");
    ellipse(centerX-360 + bodyWiggle, centerY+110 + bodyWiggleY, fSize, fSize)
    
       fill("#6CE540");
    ellipse(centerX-320 + bodyWiggle2, centerY+110 + bodyWiggleY2, fSize, fSize)
    
        fill("green");
    ellipse(centerX-280 + bodyWiggle, centerY+100 + bodyWiggleY, fSize, fSize)
    
      fill("#6CE540");
    ellipse(centerX-250 + bodyWiggle2, centerY+140 + bodyWiggleY2, fSize, fSize)
    
    fill("green");
    ellipse(centerX-230 + bodyWiggle, centerY+170 + bodyWiggleY, fSize, fSize)
    
    fill("#6CE540");
    ellipse(centerX-190 + bodyWiggle2, centerY+190 + bodyWiggleY2, fSize, fSize)
    
    fill("green");
    ellipse(centerX-150 + bodyWiggle, centerY+200 + bodyWiggleY, fSize, fSize)
    
     fill("#6CE540");
    ellipse(centerX-110 + bodyWiggle2, centerY+130 + bodyWiggleY2, fSize, fSize)
    
    
        //var value = "green";
//function draw() {
 // fill(value);
//  ellipse(posX-70 + bodyWiggle, posY+70 + bodyWiggleY, fSize, fSize)
//}
//function mousePressed() {
  //if (value == "green") {
   // value = "6CE540";
  //} else {
  //  value = "green";
  //}
//}
    

    
    fill("green");
   ellipse(centerX -70 + bodyWiggle, centerY +70 + bodyWiggleY, fSize, fSize)
    
    
    
    
    
       //nose
    var noseWiggle = map(mouseX,0,width,-40,40);
   // console.log("noseWiggle: " + noseWiggle);
    
    var noseWiggleY = map(mouseY, 0, height, 0,40);
    
   
    
    //Face
    fill("#6CE540");
    ellipse(centerX + noseWiggle, centerY + noseWiggleY, fSize, fSize);

    
    //mouth
    
    fill(random(255), random(255), random(255));;
    //rect(posX- 50, posY+ 50, 100,20);
    ellipse(centerX + noseWiggle, centerY + 40 + noseWiggleY, 30, 30);
    
       strokeWeight(0);
    //eyes
    fill("white");
    ellipse(centerX - 30 + noseWiggle, centerY - 20 + noseWiggleY, 25, 45);
    ellipse(centerX + 30 + noseWiggle, centerY - 20 + noseWiggleY, 25, 45);
 
    var eyeWiggle = map(mouseX, 0, width, -30,30);
    var eyeWiggleY = map(mouseY, 0, height, 0,30);
    
  stroke(hRedColor.value(), hGreenColor.value(), hBlueColor.value());
    
    //crazy
    //            frameRate(40);
  //  for (var i = 0; i < height; i++) {
  //      stroke(random(255), random(255), random(255));
 //       line(linePoints[0], linePoints[1], linePoints[2], linePoints[3]);
  //      linePoints[1]++;
  //      linePoints[3]++;
 //   }

    linePoints = [0, 0, 400, 0];
    
    
    //pupils
    fill("black");
    ellipse(centerX - 30 + eyeWiggle, centerY - 20 + eyeWiggleY, 15, 35);
    ellipse(centerX + 30 + eyeWiggle, centerY - 20 + eyeWiggleY, 15, 35);
     strokeWeight(3);
    
    //mouthline
    //line(posX - 50, posY + 60, posX + 50, posY + 60);
    
    
    // rectMode(CENTER);
   // imageMode(CENTER);
    
    
 

    
    //Mapping Code
    if (mouseX > targetPosX[0] - 100 && mouseX < targetPosX[0] + 100 && mouseY > targetPosY - 100 && mouseY < targetPosY + 100) {
        image(pics[0], 0, targetPosY, 300, 300);

    } else {
       // rect(targetPosX[0], 100, 200, 200);
    }

    if (mouseX > targetPosX[1] - 100 && mouseX < targetPosX[1] + 100 && mouseY > targetPosY - 100 && mouseY < targetPosY + 100) {
  image(pics[1], targetPosX[1], targetPosY, 300, 300);

    } else {
     // rect(targetPosX[1], 100, 200, 200);
  }

 if (mouseX > targetPosX[2] - 100 && mouseX < targetPosX[2] + 100 && mouseY > targetPosY - 100 && mouseY < targetPosY + 100) {
        image(pics[2], targetPosX[2], targetPosY, 300, 300);

  } else {
      // rect(targetPosX[2], 100, 200, 200);
 }

    



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


    

    

    