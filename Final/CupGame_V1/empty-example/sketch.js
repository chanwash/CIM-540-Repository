var posX = 250;
var posY = 0;
var directionY = false;


var startButton;
var moveCups = false;
var hideRick = false;

var imageArray = [];

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

var cup0target = [740,560,380];
var cup0counter = 0;

var cup1target = [380,740,560];
var cup1counter = 0;

var cup2target = [560,380,740];
var cup2counter = 0;

var rick0target = [790,380, 650, 700, 750, 500, 380];
var rick0counter = 0;




function preload(){
    imageArray.push(loadImage('assets/red_cup1.png'));
    imageArray.push(loadImage('assets/red_cup2.png'));
    imageArray.push(loadImage('assets/red_cup3.png'));
    imageArray.push(loadImage('assets/table.png'));
 imageArray.push(loadImage('assets/pickle.png'));
    imageArray.push(loadImage('assets/garage.png'));
        imageArray.push(loadImage('assets/garage1.png'));


    
    
}
//Code Plan
// When the user hits Go, the cups will begin to move in a pre programemd pattern. Once they stop moving the user will have an option to guess which cup the object is under. The user will be congratulated for choicing the correct cup.
//variables for each cup only moving in x position, start position and I need an animation, pre programed pattern, move between positions, set up in an array, when you press go, need direction, from 0 to 200 move in pos direction, and in negative from 200 to 0. if index 0 is bigger than 1 then that means. move negative if greater than a certain number. keep moving till it reaches my second point. start point 0 end point index 1

function setup(){
    
    createCanvas(1500,1500);    
    
    startButton = createButton("Go");
    startButton.position(0,550);
    
   
    
    
    startButton.mousePressed(function(){
        if(moveCups == false){
           moveCups=true;            
           
           }else{
               moveCups = false;
           }
        
        
    });
    
     startButton = createButton("Hide Rick");
    startButton.position(0,500);
    
    
     startButton.mousePressed(function(){
        if(hideRick == false){
           hideRick=true;            
           
           }else{
               hideRick = false;
           }
        
        
    });
    
    
}

function draw(){
    
    
    background(255);
    
    image(imageArray[5], 0,0,imageArray[5].width/1.1,imageArray[5].height/1.1);
        
    image(imageArray[3], 0,1500,imageArray[3].width/4.5,imageArray[3].height/4.5);
    
    image(imageArray[4], rick0x,rick0y,imageArray[4].width/5,imageArray[4].height/5);
    
    image(imageArray[6], 0,0,imageArray[6].width/1.1,imageArray[6].height/1.1);
    
     image(imageArray[0], cup0x,cup0y,imageArray[0].width/16,imageArray[0].height/16);
          image(imageArray[1], cup1x,cup1y,imageArray[1].width/16,imageArray[1].height/16);
                image(imageArray[2], cup2x,cup2y,imageArray[2].width/16,imageArray[2].height/16);
    
    
     if(moveCups == true){
//    image(imageArray[0], cup0x,cup0y,imageArray[0].width/25,imageArray[0].height/25);
//          image(imageArray[1], cup1x,cup1y,imageArray[1].width/25,imageArray[1].height/25);
//                image(imageArray[2], cup2x,cup2y,imageArray[2].width/25,imageArray[2].height/25);
        // image(imageArray[1], 300,0,imageArray[1].width/15,imageArray[1].height/15);
          //  image(imageArray[2], 600,0,imageArray[2].width/15,imageArray[2].height/15);
         
         //apply to each and make sure they dont overlap
         //speed
         //levels to the game
         //
         
         //move cup0x to cup0target[]
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
         
         
         
         
     }
         
         if(hideRick == true){
             
             
    if(rick0x == rick0target[rick0counter]){
            rick0counter++;
            } else if(rick0x < rick0target[rick0counter]){
             rick0x++;
         }else if(rick0x > rick0target[rick0counter]){
             rick0x--;
         }
          
         
         
         }
         
         
  }
    
    posY++;
    


           
       
    

