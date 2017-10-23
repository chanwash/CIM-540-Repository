var frameArray = [];
var currentFrame = 0;

var interval = 500;
var pMillis = 0;

function preload() {
//    framearray[0] = loadImage("assets/Thatwasclose0.jpg");
//      framearray[1] = loadImage("assets/Thatwasclose1.jpg");
//      framearray[2] = loadImage("assets/Thatwasclose2.jpg")
//      framearray[3] = loadImage("assets/Thatwasclose3.jpg");
    
    for (var i = 0; i < 4; i++){
        var loadImageString = "assests/Thatwasclose" + i + ".jpg";
        frameArray[i] = loadImage(loadImageString);
    }
    
    }

function setup() {
    createCanvas(500, 500);
}

function draw() {
    //console.log(millis());



    image(frameArray[currentFrame], 0, 0);


    if (millis() - pMillis >= interval) {
        currentFrame++; // Next frame
        pMillis = millis();
    }

    if (currentFrame == frameArray.length) {
        currentFrame = 0;
        // Return to first frame
    }

    if(appear == true){
        ellipse(mouseX,mouseY, 100,100);
    }


}
