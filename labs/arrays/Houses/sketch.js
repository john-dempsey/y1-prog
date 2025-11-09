function setup() {
  createCanvas(800, 450);
  noLoop();
  noStroke();
  print("Hello World!");
}

function draw() {
  // sky
  background(135, 206, 236);
  // ground
  fill(124, 252, 0);
  rect(0, height * 0.75, width, height * 0.25);
  // sun
  fill(255, 255, 0);
  ellipse(700, 80, 80, 80);

  let houses = [];

  houses[0] = new House(100, 250, 100, 100, 3);
  houses[1] = new House(250, 250, 200, 150, 5);
  houses[2] = new House(500, 250, 150, 180, 2);

  for (let i = 0; i != houses.length; i++) {
    houses[i].draw();
  }
}