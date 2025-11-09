
class House {
  constructor(x, y, w, h, numWindows) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.numWindows = numWindows;
  }

  draw() {
    // house details
    let wallColor = color(66, 133, 244);
    let roofColour = color(219, 68, 55);
    let doorColor = color(0);
    let windowColor = color(255, 255, 0);

    // wall
    fill(wallColor);
    rect(this.x, this.y, this.w, this.h);
    // roof
    let eaves = this.w * 0.10;
    fill(roofColour);
    triangle(
      this.x - eaves, this.y,
      this.x + this.w + eaves, this.y,
      this.x + (this.w / 2), this.y - (this.h / 2)
    );
    // door
    let doorW = this.w / 4;
    let doorH = this.h / 3;
    fill(doorColor);
    rect(
      this.x + (this.w / 2) - (doorW / 2),
      this.y + this.h - doorH,
      doorW,
      doorH
    );

    let windowW = this.w / (2 * this.numWindows + 1);
    let windowH = this.h / 6;
    let winY = this.y + (this.h / 3) - windowH;
    fill(windowColor);
    for (let i = 0; i != this.numWindows; i++) {
      let winX = this.x + (i * windowW * 2) + windowW;
      rect(winX, winY, windowH, windowH);
    }
  }
}