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

  let house1 = {
    x: 100,
    y: 250,
    w: 100,
    h: 100,
    numWindows: 3
  };
  let house2 = {
    x: 250,
    y: 250,
    w: 200,
    h: 150,
    numWindows: 5
  };
  let house3 = {
    x: 500,
    y: 250,
    w: 150,
    h: 180,
    numWindows: 2
  };

  drawHouse(house1);
  drawHouse(house2);
  drawHouse(house3);
}

function drawHouse(house) {
  // house details
  let wallColor = color(66, 133, 244);
  let roofColour = color(219, 68, 55);
  let doorColor = color(0);
  let windowColor = color(255, 255, 0);

  // wall
  fill(wallColor);
  rect(house.x, house.y, house.w, house.h);
  // roof
  let eaves = house.w * 0.10;
  fill(roofColour);
  triangle(
    house.x - eaves, house.y,
    house.x + house.w + eaves, house.y,
    house.x + (house.w / 2), house.y - (house.h / 2)
  );
  // door
  let doorW = house.w / 4;
  let doorH = house.h / 3;
  fill(doorColor);
  rect(
    house.x + (house.w / 2) - (doorW / 2),
    house.y + house.h - doorH,
    doorW,
    doorH
  );

  let windowW = house.w / (2 * house.numWindows + 1);
  let windowH = house.h / 6;
  let winY = house.y + (house.h / 3) - windowH;
  fill(windowColor);
  for (let i = 0; i != house.numWindows; i++) {
    let winX = house.x + (i * windowW *2) + windowW;
    rect(winX, winY, windowH, windowH);
  }
}