class Asteroid {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    
    // Random velocity for drifting through space
    this.speedX = random(-2, 2);
    this.speedY = random(-2, 2);
    
    // Random rotation
    this.angle = 0;
    this.rotationSpeed = random(-0.02, 0.02);
    
    // Generate irregular shape in constructor
    this.points = 8;
    this.offsets = [];
    for (let i = 0; i < this.points; i++) {
      this.offsets[i] = random(-this.size * 0.2, this.size * 0.2);
    }
  }
  
  // Move the asteroid
  move() {
    this.x = this.x + this.speedX;
    this.y = this.y + this.speedY;
    this.angle = this.angle + this.rotationSpeed;
    
    // Wrap around screen edges
    if (this.x > width + this.size) {
      this.x = -this.size;
    }
    if (this.x < -this.size) {
      this.x = width + this.size;
    }
    if (this.y > height + this.size) {
      this.y = -this.size;
    }
    if (this.y < -this.size) {
      this.y = height + this.size;
    }
  }
  
  // Display the asteroid
  display() {
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    
    fill(150);
    stroke(100);
    strokeWeight(2);
    
    // Draw irregular polygon using predefined shape
    beginShape();
    for (let i = 0; i < this.points; i++) {
      let angle = (TWO_PI / this.points) * i;
      let radius = this.size + this.offsets[i];
      let x = cos(angle) * radius;
      let y = sin(angle) * radius;
      vertex(x, y);
    }
    endShape(CLOSE);
    
    pop();
  }
}
