let circles = [];
let cols = 4;
let rows = 4;

function setup() {
  createCanvas(800, 600);
  background(0);

  let xSpacing = width / (cols + 1);
  let ySpacing = height / (rows + 1);
  
  for (let i = 1; i <= cols; i++) {
    for (let j = 1; j <= rows; j++) {
      circles.push({
        x: i * xSpacing,
        y: j * ySpacing,
        r: random(30, 60)
      });
    }
  }
}

function draw() {
  background(0);
  fill(0);
  noStroke();
  for (let c of circles) {
    ellipse(c.x, c.y, c.r * 2);
  }
}
