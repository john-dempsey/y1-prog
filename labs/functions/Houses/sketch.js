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

  // drawHouse(100, 250, 100, 100, 3);
  // drawHouse(250, 250, 200, 150, 5);
  // drawHouse(500, 250, 150, 180, 2);

  let houseX, houseY, houseW, houseH, windowCount;

  houseX = 100;
  houseY = 250;
  houseW = 100;
  houseH = 100;
  windowCount = 3;
  drawHouse(houseX, houseY, houseW, houseH, windowCount);

  houseX = 250;
  houseY = 250;
  houseW = 200;
  houseH = 150;
  windowCount = 5;
  drawHouse(houseX, houseY, houseW, houseH, windowCount);

  houseX = 500;
  houseY = 250;
  houseW = 150;
  houseH = 180;
  windowCount = 2;
  drawHouse(houseX, houseY, houseW, houseH, windowCount);
}

function drawHouse(x, y, w, h, numWindows) {
  // house details
  let wallColor = color(66, 133, 244);
  let roofColour = color(219, 68, 55);
  let doorColor = color(0);
  let windowColor = color(255, 255, 0);

  // wall
  fill(wallColor);
  rect(x, y, w, h);
  // roof
  let eaves = w * 0.10;
  fill(roofColour);
  triangle(
    x - eaves, y,
    x + w + eaves, y,
    x + (w / 2), y - (h / 2)
  );
  // door
  let doorW = w / 4;
  let doorH = h / 3;
  fill(doorColor);
  rect(
    x + (w / 2) - (doorW / 2),
    y + h - doorH,
    doorW,
    doorH
  );

  let windowW = w / (2 * numWindows + 1);
  let windowH = h / 6;
  let winY = y + (h / 3) - windowH;
  fill(windowColor);
  for (let i = 0; i != numWindows; i++) {
    let winX = x + (i * windowW *2) + windowW;
    rect(winX, winY, windowH, windowH);
  }
}
