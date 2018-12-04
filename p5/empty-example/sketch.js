var myX = undefined;
var myY = undefined;

function setup() {
  createCanvas(600,600);
}

function draw() {
  // background(frameCount % 255);
    //console.log("Nik")
    if (myX - mouseX > 100 || mouseX - myX > 100) {
      if (myX - mouseX > 100 || mouseX - myX > 100) {
        text("fj", mouseX, mouseY);
        myX = mouseX;
        myY = mouseY;
      }
    /*
    push();
    translate(mouseX, mouseY);
    rotate(frameCount / 5);
    text("fj", 0, 0);
    pop();
    */
      else {
        
      }
  }
  else {

  }
}
