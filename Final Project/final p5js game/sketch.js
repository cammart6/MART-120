var shapes = []; 
var score = 0;
var gameState = "START";

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);
  
  
  
  fill(0);
  textAlign(CENTER);
  textSize(16);
  text("click the blocks when they reach the bottom", width/2, 30);
  
  if (frameCount % 60 === 0) {
    shapes.push(new FallingShape(random(width), 0));
  }

  for (let i = shapes.length - 1; i >= 0; i--) {
    shapes[i].update();
    shapes[i].display();


    if (checkCatch(shapes[i])) {
      score++;
      shapes.splice(i, 1); 
    } else if (shapes[i].y > height) {
      shapes.splice(i, 1); 
    }
  }

  fill(0);
  textSize(20);
  text("Score: " + score, 50, 30);
}

class FallingShape {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = random(2, 5);
    this.size = 30;
  }

  update() {
    this.y += this.speed;
  }

  display() {
    fill(100, 150, 250);
    rect(this.x, this.y, this.size, this.size);
  }
}


function checkCatch(obj) {
  var d = dist(mouseX, height - 20, obj.x, obj.y);
  if (d < 30 && mouseIsPressed) {
    return true;
  } else {
    return false;
  }
}