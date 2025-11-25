let spaceship;

function setup() {
  createCanvas(800, 600);

  // Create spaceship in center of screen
  spaceship = new Spaceship(width / 2, height / 2); 
}

function draw() {
  background(0); // Space has always been black
  
  // Handle keyboard input
  if (keyIsPressed) { 
    if (keyCode === UP_ARROW) {
      spaceship.accelerate();
    }
    if (keyCode === LEFT_ARROW) {
      spaceship.turnLeft();
    }
    if (keyCode === RIGHT_ARROW) {
      spaceship.turnRight();
    }
  }
  // Update and display spaceship
  spaceship.move();
  spaceship.display();
}

