let x = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  fill(255, 0, 0)
  circle(x, height / 2, 50)
  
  if (x < width) {
    x += 5;
  } else {
    x = 0;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
