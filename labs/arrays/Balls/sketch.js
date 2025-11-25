let balls = [];

function setup() {
  createCanvas(600, 600);

  let x, y;
  let size;
  let clr;
  let speedX, speedY;

  let numBalls = 1000;
  for (let i = 0; i < numBalls; i++) {
    x = random(width);
    y = random(height);
    size = random(15, 25);
    clr = color(random(255), random(255), random(255));
    speedX = random(1, 3);
    speedY = random(1, 3);

    balls[i] = new Ball(x, y, size, clr, speedX, speedY);
  }
}

function draw() {
  background(220);

  for (let i = 0; i < balls.length; i++) {
    balls[i].move();
    balls[i].draw();
  }
}

