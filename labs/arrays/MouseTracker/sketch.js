let xpos = [];
let ypos = [];
let trailLength = 50;

function setup() {
  createCanvas(600, 600);

  // Initialize mouse positions
  for (let i = 0; i < trailLength; i++) {
    xpos[i] = 0;
    ypos[i] = 0;
  }
}

function draw() {
  background(255);

  // Add new mouse position at front
  xpos.unshift(mouseX);
  ypos.unshift(mouseY);
  
  // Remove oldest position from end
  xpos.pop();
  ypos.pop();

  // Draw the trail
  noStroke();
  fill(0, 150, 255, 150);
  for (let i = 0; i < trailLength; i++) {
    // Size decreases for trailing effect
    let size = map(i, 0, trailLength, 12, 2);
    ellipse(xpos[i], ypos[i], size, size);
  }
}

