var interfaceItems = [];

var brushSize = 10;
var Color = "red";


function setup(){
  createCanvas(1000,1000);

  interfaceItems.push(new interface(100,100,50,color("black")));
  interfaceItems.push(new interface(200,100,50,color("green")));
    interfaceItems.push(new interface(300,100,50,color("blue")));
        interfaceItems.push(new interface(400,100,50,color("magenta")));
                 interfaceItems.push(new interface(500,100,50,color("red")));

}

function draw(){

  fill(Color);
  ellipse(mouseX, mouseY, brushSize,brushSize);

  interfaceItems[0].display();
  interfaceItems[1].display();
                interfaceItems[2].display();
    interfaceItems[3].display();
     interfaceItems[4].display();
  interfaceItems[0].check();
  interfaceItems[1].check();
                interfaceItems[2].check();
     interfaceItems[3].check();
      interfaceItems[4].check();
    
    
  console.log(interfaceItems[0].overlay);



}

function mousePressed(){

  if(interfaceItems[0].check() == true){
    Color = "black";
  }

  if(interfaceItems[1].check() == true){
    Color = "green";
  }
    
     if(interfaceItems[2].check() == true){
    Color = "blue";
  }
    
      if(interfaceItems[3].check() == true){
    Color = "magenta";
  }
          if(interfaceItems[4].check() == true){
    Color = "red";
  }

}


function interface(tempX, tempY, tempBoxSize, tempColor){
  this.x = tempX;
  this.y = tempY;
  this.boxSize = tempBoxSize;
  this.setFill = tempColor;
  this.overlay = false;

  this.display = function(){
    //console.log(this.overlay);

    fill(this.setFill);
    rect(this.x, this.y, this.boxSize, this.boxSize);

    if(this.overlay == true){
      fill(127, 200);
      rect(this.x, this.y, this.boxSize, this.boxSize);
    }



  }

  this.check = function(){
    if(mouseX > this.x && mouseX < (this.x + this.boxSize) && mouseY > this.y && mouseY < (this.y + this.boxSize) ){
      this.overlay = true;
      return true;
    }else{
      this.overlay = false;

      return false;
    }
  }
}
