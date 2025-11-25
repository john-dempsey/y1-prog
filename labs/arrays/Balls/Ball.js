class Ball {
    constructor(x, y, dmtr, clr, dx, dy) {
        this.x = x;
        this.y = y;
        this.diameter = dmtr;
        this.color = clr;
        this.speedX = dx;
        this.speedY = dy;
    }

    draw() {
        fill(this.color);
        noStroke();
        ellipse(this.x, this.y, this.diameter);
    }

    move() {
        this.x += this.speedX;
        this.y += this.speedY;
        // Bounce off walls
        if (this.x < this.diameter / 2 || this.x > width - this.diameter / 2) {
            this.speedX *= -1;
        }
        if (this.y < this.diameter / 2 || this.y > height - this.diameter / 2) {
            this.speedY *= -1;
        }
    }
}