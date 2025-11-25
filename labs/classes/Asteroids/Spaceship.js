class Spaceship {
  constructor(x, y) {
    this.x = x;             // Initial x position
    this.y = y;             // Initial y position
    this.angle = 0;         // Initial angle facing up
    this.speedX = 0;        // Initial x velocity
    this.speedY = 0;        // Initial y velocity
    this.size = 15;         // Size of the spaceship
    this.thrust = 0.2;      // Acceleration rate
    this.friction = 0.98;   // Friction coefficient to slow down
    this.turnSpeed = 0.1;   // Rotation speed
  }
  
  // Apply thrust in the direction the ship is facing
  accelerate() {
    this.speedX = this.speedX + cos(this.angle - HALF_PI) * this.thrust;
    this.speedY = this.speedY + sin(this.angle - HALF_PI) * this.thrust;
  }
  
  // Rotate left
  turnLeft() {
    this.angle = this.angle - this.turnSpeed;
  }
  
  // Rotate right
  turnRight() {
    this.angle = this.angle + this.turnSpeed;
  }
  
  // Update position
  move() {
    // Apply friction to gradually slow down
    this.speedX = this.speedX * this.friction;
    this.speedY = this.speedY * this.friction;
    
    // Update position
    this.x = this.x + this.speedX;
    this.y = this.y + this.speedY;
    
    // Wrap around screen edges
    if (this.x > width) {
      this.x = 0;
    }
    if (this.x < 0) {
      this.x = width;
    }
    if (this.y > height) {
      this.y = 0;
    }
    if (this.y < 0) {
      this.y = height;
    }
  }
  
  // Display the spaceship
  display() {
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    
    fill(255);
    stroke(255);
    strokeWeight(2);
    
    // Draw triangle pointing up
    beginShape();
    vertex(0, -this.size);
    vertex(-this.size * 0.6, this.size);
    vertex(this.size * 0.6, this.size);
    endShape(CLOSE);
    
    pop();
  }
}

