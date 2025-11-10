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

  let x, y, w, h, numWindows;
  let wallColor = color(66, 133, 244);
  let roofColour = color(219, 68, 55);
  let doorColor = color(0);
  let windowColor = color(255, 255, 0);
  let eaves, doorW, doorH, windowW, windowH, winY, winX;

  //---------------------------------------------------------------------------
  // House #1
  //---------------------------------------------------------------------------
  x = 100;
  y = 250;
  w = 100;
  h = 100;
  numWindows = 3;
    // wall
  fill(wallColor);
  rect(x, y, w, h);
  // roof
  eaves = w * 0.10;
  fill(roofColour);
  triangle(
    x - eaves, y,
    x + w + eaves, y,
    x + (w / 2), y - (h / 2)
  );
  // door
  doorW = w / 4;
  doorH = h / 3;
  fill(doorColor);
  rect(
    x + (w / 2) - (doorW / 2),
    y + h - doorH,
    doorW,
    doorH
  );

  windowW = w / (2 * numWindows + 1);
  windowH = h / 6;
  winY = y + (h / 3) - windowH;
  fill(windowColor);
  for (let i = 0; i != numWindows; i++) {
    winX = x + (i * windowW *2) + windowW;
    rect(winX, winY, windowH, windowH);
  }

  //---------------------------------------------------------------------------
  // House #2
  //---------------------------------------------------------------------------
  x = 250;
  y = 250;
  w = 200;
  h = 150;
  numWindows = 5;
  // wall
  fill(wallColor);
  rect(x, y, w, h);
  // roof
  eaves = w * 0.10;
  fill(roofColour);
  triangle(
    x - eaves, y,
    x + w + eaves, y,
    x + (w / 2), y - (h / 2)
  );
  // door
  doorW = w / 4;
  doorH = h / 3;
  fill(doorColor);
  rect(
    x + (w / 2) - (doorW / 2),
    y + h - doorH,
    doorW,
    doorH
  );

  windowW = w / (2 * numWindows + 1);
  windowH = h / 6;
  winY = y + (h / 3) - windowH;
  fill(windowColor);
  for (let i = 0; i != numWindows; i++) {
    winX = x + (i * windowW *2) + windowW;
    rect(winX, winY, windowH, windowH);
  }

  //---------------------------------------------------------------------------
  // House #3
  //---------------------------------------------------------------------------
  x = 500;
  y = 250;
  w = 150;
  h = 180;
  numWindows = 2;
  // wall
  fill(wallColor);
  rect(x, y, w, h);
  // roof
  eaves = w * 0.10;
  fill(roofColour);
  triangle(
    x - eaves, y,
    x + w + eaves, y,
    x + (w / 2), y - (h / 2)
  );
  // door
  doorW = w / 4;
  doorH = h / 3;
  fill(doorColor);
  rect(
    x + (w / 2) - (doorW / 2),
    y + h - doorH,
    doorW,
    doorH
  );

  windowW = w / (2 * numWindows + 1);
  windowH = h / 6;
  winY = y + (h / 3) - windowH;
  fill(windowColor);
  for (let i = 0; i != numWindows; i++) {
    winX = x + (i * windowW *2) + windowW;
    rect(winX, winY, windowH, windowH);
  }
}