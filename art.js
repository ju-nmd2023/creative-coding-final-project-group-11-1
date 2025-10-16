let circles = [];
let lines = [];
let cols = 4;
let rows = 4;

function setup() {
  createCanvas(800, 600);
  background(0);
  frameRate(120);

  let xSpacing = width / (cols + 1);
  let ySpacing = height / (rows + 1);
  
  for (let i = 1; i <= cols; i++) {
    for (let j = 1; j <= rows; j++) {
      circles.push({ x: i * xSpacing, y: j * ySpacing, r: random(30, 60) });
    }
  }

  for (let i = 0; i < 4000; i++) {
    lines.push({
      x: random(width),
      y: random(height),
      hue: random(360),
      angleOffset: random(TWO_PI),
      thickness: random(0.5, 4.5)
    });
  }

  colorMode(HSB, 200, 100, 100, 300);
  noFill();
}

function draw() {
  background(0, 5);
  fill(0);
  noStroke();
  for (let c of circles) ellipse(c.x, c.y, c.r * 2);

  for (let l of lines) {
    let angle = noise(l.x * 0.005, l.y * 0.005, frameCount * 0.002) * TWO_PI * 4 + l.angleOffset;
    let speed = 5;
    let dx = cos(angle) * speed;
    let dy = sin(angle) * speed;
    let nextX = l.x + dx;
    let nextY = l.y + dy;

    for (let c of circles) {
      let d = dist(nextX, nextY, c.x, c.y);
      if (d < c.r) {
        let angleAway = atan2(nextY - c.y, nextX - c.x);
        dx = cos(angleAway) * speed;
        dy = sin(angleAway) * speed;
        break;
      }
    }

    stroke(l.hue, 100, 100, 100);
    strokeWeight(l.thickness);
    line(l.x, l.y, l.x + dx, l.y + dy);

    l.x += dx;
    l.y += dy;

    if (l.x < 0) l.x = width;
    if (l.x > width) l.x = 0;
    if (l.y < 0) l.y = height;
    if (l.y > height) l.y = 0;
  }
}

        