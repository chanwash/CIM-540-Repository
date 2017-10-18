var centerX = 0;
var centerY = 0;
var bgColor;


var hRedColor, hGreenColor, hBlueColor;

function setup() {
  createCanvas(400, 400);
  centerX = width / 2;
  centerY = height / 2;
    bgColor = color(255,0,0);
    
    var redText = createP("Red");
    hRedColor = createSlider(0,255,0);
    var greenText = createP("Green");
    hGreenColor = createSlider(0,255,0);
    var blueText = createP("Blue");
    hBlueColor = createSlider(0,255,0);
    
    
    
}

function draw() {
  background(bgColor);
    
        //console.log("mouseX: " + mouseX + " mouseY:" + mouseY);
    
    centerX = mouseX;
    centerY = mouseY;
    

  fill(255);
    stroke(0);
  strokeWeight(1);

  //face
  ellipse(centerX, centerY, 100, 100);
  //nose
    var noseWiggle = map(mouseX,0,width,-10,10);
   // console.log("noseWiggle: " + noseWiggle);
    
    var noseWiggleY = map(mouseY, 0, height, 0,10);
    
  ellipse(centerX + noseWiggle, centerY + 10, 20, 20);
  //eyes
  ellipse(centerX - 10 + noseWiggle, centerY - 10 + noseWiggleY, 10, 20);
  ellipse(centerX + 10 + noseWiggle, centerY - 10 + noseWiggleY, 10, 20);
  rectMode(CENTER);
  rect(centerX, centerY + 30, 50, 15, 5);
  rect(centerX, centerY + 30, 50, 1, 1);

    
    //pretty messed up below need to fix
  noFill();
    stroke(hRedColor.value(), 0, 0);
    stroke(hGreenColor.value(), 0, 0);
    stroke(hBlueColor.value(), 0, 0);
    
  strokeWeight(4);
  arc(centerX,centerY,100,100, 0,PI)
  strokeWeight(30);
  arc(centerX,centerY,100,100, PI,TWO_PI)

}

function mousePressed(){
    
    console.log("mousePressed");
    bgColor = color(0,255,0);
   
    
}

