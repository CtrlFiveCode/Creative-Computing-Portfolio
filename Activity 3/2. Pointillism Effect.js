// Variable Declaration
var img, x, y;

// Preload Image
function preload() {
  img = loadImage("cat.png");
}

function setup() {
  // Creates Canvas (width, height)
  createCanvas(400, 400);
  // Background = Black
  background(0);
  // Diable Stroke
  noStroke();
}

function draw() {
  // Pick random X in Canvas
  x = random(width);
  // Pick random Y in Canvas
  y = random(height);
  // Pick Pixel Color
  var c = img.get(x, y);
  // Color = From Cat Img (Tarnsparency = 100)
  fill(c[0], c[1], c[2], 100);
  // Draw Circle
  ellipse(x, y, 15, 15);
}
