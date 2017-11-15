var posX = 250;
var posY = 0;
var directionY = false;


var startButton;
var moveCups = false;

var imageArray = [];



function preload(){
    imageArray.push(loadImage('assets/red_cup1.jpg'));
    imageArray.push(loadImage('assets/red_cup2.jpg'));
    imageArray.push(loadImage('assets/red_cup3.jpg'));
    
    
}


function setup(){
    
    createCanvas(1000,1000);    
    
    startButton = createButton("Go");
    startButton.position(0,500);
    
    
    startButton.mousePressed(function(){
        if(moveCups == false){
           moveCups=true;
            
           
           }else{
               moveCups = false;
           }
        
        
    });
}

function draw(){
    background(255);
     if(moveCups == true){
    image(imageArray[0], 0,0,imageArray[0].width/15,imageArray[0].height/15);
         image(imageArray[1], 300,0,imageArray[1].width/15,imageArray[1].height/15);
            image(imageArray[2], 600,0,imageArray[2].width/15,imageArray[2].height/15);
  }
    
    posY++;
        
if (moveCups == true){
      if (posY <=0){ 
        upDown = true;
                 }
       
    if(posY >=height){
        //posY = 0
        //posY--;
        upDown = false;
    }
    
    if (upDown == false){
        posY--;
    }
    
    if (upDown == true){
        posY++;
    }   
    
}
  
           
       
    
}
