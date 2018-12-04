function setup() {
  // put setup code here
  createCanvas(500,500);
}

function draw() {
  background(0, 10);
  fill(mouseX, mouseY, 74, 35);
  if (mouseIsPressed) {
  for (var i=0; i < 10; i++){
    rect(mouseX+random(30), mouseY-random(30), mouseY+i, mouseX-i, random(50));
  }
  }
  else {
  for (var i=0; i < 10; i++){
    ellipse(mouseX+random(30), mouseY-random(30), mouseY+i, mouseX-i);
  }
  }
  }
