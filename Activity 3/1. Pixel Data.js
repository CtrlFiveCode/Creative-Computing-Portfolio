// Variable Declaration
var img, x, y;

// Preload Image
function preload() {
  img = loadImage("cat.png");
}

function setup() {
  // Creates Canvas (width, height)
  createCanvas(400, 400);
  // Disable Stroke
  noStroke();
}

function draw() {
  // X-Cord = Mouse X-Position
  x = mouseX;
  // Y-Cord = Mouse Y-Position
  y = mouseY;
  // Cat Image
  image(img, 0, 0);
  // Pixel Color at Mouse Position
  var c = get(x, y);
  // Color = Pixel Color
  fill(c);
  // Rect = Mouse Position
  rect(x - 25, y - 25, 50, 50);
}
