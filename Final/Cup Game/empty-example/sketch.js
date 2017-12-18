var posX = 250;
var posY = 0;
var directionY = false;


var startButton;
var moveCups = false;
var hideRick = false;
var resetGame = false;
var chooseOne = false;
var chooseTwo = false;
var chooseThree = false;

var selectCup0 = false;
var selectCup1 = false;
var selectCup2 = false;


var imageArray = [];

var speedSlider;
var speed;


var x = posX;
var y = posY;


var cup0x = 380;
var cup0y = 460;
var cup1x = 560;
var cup1y = 460;
var cup2x = 740;
var cup2y = 460;
var rick0x = 840;
var rick0y = 480;
var rick1x = 560;
var rick1y = 460;
var morty0x = 560;
var morty0y = 580;

var cup0target = [740,560,380];
var cup0counter = 0;

var cup1target = [380,740,560];
var cup1counter = 0;

var cup2target = [560,380,740];
var cup2counter = 0;

var rick0target = [790,388,570]; //650, 700, 750,
var rick0counter = 0;

var rick1target = [390, 750, 570]
var rick1counter = 0;

var morty0target = [270]
var morty0counter = 0;

var targetPosX = 380;

var targetPosY = 460;


var guess = false;




function preload(){
imageArray.push(loadImage('assets/red_cup1.png'));
    imageArray.push(loadImage('assets/red_cup2.png'));
    imageArray.push(loadImage('assets/red_cup3.png'));
    imageArray.push(loadImage('assets/table.png'));
 imageArray.push(loadImage('assets/pickle.png'));
    imageArray.push(loadImage('assets/garage.png'));
        imageArray.push(loadImage('assets/garage1.png'));
    soundFormats('mp3');
    mySound = loadSound('assets/pickle_rick.mp3');
    mySound2 = loadSound('assets/Mortys Oh Man, Oh Jeez.wav');
    imageArray.push(loadImage('assets/morty.png'));
    imageArray.push(loadImage('assets/garage2.png'));
    imageArray.push(loadImage('assets/logo1.png'));
    mySound3 = loadSound('assets/Remix.mp3');
    
    imageArray.push(loadImage('assets/cup1.png'));
    imageArray.push(loadImage('assets/cup2.png'));
   imageArray.push(loadImage('assets/cup3.png'));
   imageArray.push(loadImage('assets/mr.png'));
 mySound4 = loadSound('assets/mr.wav');

       imageArray.push(loadImage('assets/difficulty.png'));
 mySound5 = loadSound('assets/Wubba.mp3');
mySound6 = loadSound('assets/seriously.wav');
    
    //need levels, guessing system
    
}
//Code Plan
// When the user hits Go, the cups will begin to move in a pre programemd pattern. Once they stop moving the user will have an option to guess which cup the object is under. The user will be congratulated for choicing the correct cup.
//variables for each cup only moving in x position, start position and I need an animation, pre programed pattern, move between positions, set up in an array, when you press go, need direction, from 0 to 200 move in pos direction, and in negative from 200 to 0. if index 0 is bigger than 1 then that means. move negative if greater than a certain number. keep moving till it reaches my second point. start point 0 end point index 1

function setup(){
    
    createCanvas(1500,760);  
        
      startButton = createButton("Cup 1?");
    startButton.position(265,570);
    startButton.mousePressed(function(){
        if(chooseOne == false){
           chooseOne=true;    
            
            mySound4.setVolume(3);
            mySound4.play();
           }else{
               chooseOne = false;
           }   
    });
      startButton = createButton("Cup 2?");
    startButton.position(265,591);
    startButton.mousePressed(function(){
        if(chooseTwo == false){
           chooseTwo=true; 
             mySound5.setVolume(3);
            rick0y = 415;
            mySound5.play();
            
        
           }else{
               chooseTwo = false;
           }   
    });
      startButton = createButton("Cup 3?");
    startButton.position(265,612);
    startButton.mousePressed(function(){
        if(chooseThree == false){
           chooseThree=true; 
            mySound6.setVolume(4);
            mySound6.play();
           }else{
               chooseThree = false;
           }   
    });
    
   
    
    
    speedSlider = createSlider(1.0,5.0);
  speedSlider.position(640, 690);

    
    
    startButton = createButton("Begin the Game");
    startButton.position(265,515);
    
    startButton.mousePressed(function(){
        if(moveCups == false){
           moveCups=true;   
            mySound2.setVolume(1);
    mySound2.play();
            
           
           }else{
               moveCups = false;
           }
        
        
    });
    
     startButton = createButton("Hide Rick");
    startButton.position(265,450);
    
    
     startButton.mousePressed(function(){
        if(hideRick == false){
           hideRick=true;  
            mySound.setVolume(3);
    mySound.play();
           
           }else{
               hideRick = false;
           }
        
        
    });
    
    startButton = createButton("Reset Game");
    startButton.position(600,730);
     startButton.mousePressed(function(){
        if(resetGame == false){
           resetGame=true;  
                reset();

           }else{
               resetGame = false;
           }
        
        
    });
    
    
    
    reset();
}


function reset(){
    
   // cup0counter = 0;           
         //   cup1counter = 0;       
           //   cup2counter = 0;   
  //  rick0counter = 0;
        // rick1counter = 0;
                cup0x = 380;
                cup1x = 560;
                cup2x = 740;
                rick0x = 840;
    
    
}

function draw(){
    background(255);

    
    var speed = speedSlider.value();
   
    image(imageArray[5], 0,0,imageArray[5].width/1.1,imageArray[5].height/1.1);
        
    image(imageArray[3], 0,1500,imageArray[3].width/4.5,imageArray[3].height/4.5);
    
   
    
    
    
    image(imageArray[7], morty0x, morty0y,imageArray[7].width/1.5, imageArray[7].height/1.5);
    //morty^
    
     image(imageArray[4], rick0x,rick0y,imageArray[4].width/5.5,imageArray[4].height/5.5);
    
    image(imageArray[6], 0,0,imageArray[6].width/1.1,imageArray[6].height/1.1);
    
    image(imageArray[8], 0,0,imageArray[8].width/1.1,imageArray[8].height/1.1);
    
    
    
    
image(imageArray[0], cup0x,cup0y,imageArray[0].width/16,imageArray[0].height/16);

    image(imageArray[1], cup1x,cup1y,imageArray[1].width/16,imageArray[1].height/16);
    
    image(imageArray[2], cup2x,cup2y,imageArray[2].width/16,imageArray[2].height/16);
    

    
    image(imageArray[9], -110,-100,imageArray[9].width/1.5,imageArray[9].height/1.5);

    
      image(imageArray[10],320,550,imageArray[10].width/5,imageArray[10].height/5);
    image(imageArray[11],500,550,imageArray[11].width/5,imageArray[11].height/5);
        image(imageArray[12],680,550,imageArray[12].width/5,imageArray[12].height/5);
    
    
    image(imageArray[13],-320,290,imageArray[13].width/2,imageArray[13].height/2);
    
        image(imageArray[14],420,610,imageArray[14].width/5,imageArray[14].height/5);

    
     if(moveCups == true){
         if(cup0x == cup0target[cup0counter]){
            cup0counter++;
            } else if(cup0x < cup0target[cup0counter]){
             cup0x++;
         }else if(cup0x > cup0target[cup0counter]){
             cup0x--;
         }
         
              if(cup1x == cup1target[cup1counter]){
            cup1counter++;
            } else if(cup1x < cup1target[cup1counter]){
             cup1x++;
         }else if(cup1x > cup1target[cup1counter]){
             cup1x--;
         }
         
                  if(cup2x == cup2target[cup2counter]){
            cup2counter++;
            } else if(cup2x < cup2target[cup2counter]){
             cup2x++;
         }else if(cup2x > cup2target[cup2counter]){
             cup2x--;
         }
         
         
         if(rick0x == rick1target[rick1counter]){
            rick1counter++;
            } else if(rick0x < rick1target[rick1counter]){
             rick0x++;
         }else if(rick0x > rick1target[rick1counter]){
             rick0x--;
         }
         
         
         
     }
         
         if(hideRick == true){
             
             
    if(rick0x == rick0target[rick0counter]){
            rick0counter++;
          
            } else if(rick0x < rick0target[rick0counter]){
             rick0x++;
                 
         }else if(rick0x > rick0target[rick0counter]){
             rick0x--;
            
         }
             
              if(morty0y == morty0target[morty0counter]){
                 morty0counter++;

              } else if(morty0y < morty0target[morty0counter]){
             morty0y++;
         }else if(morty0y > morty0target[morty0counter]){
             morty0y--;
         }
          
         
         
         }
         
         
  }
    

  
    

