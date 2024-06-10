// Variable Declaration
var img;

// Preload Image
function preload() {
  img = loadImage("cat.png");
}

function setup() {
  // Creates Canvas (width, height)
  createCanvas(400, 400);
  // Background = Black
  background(0);
}

function draw() {
  // Cat Image
  image(img, 0, 0);

  // Maps Mouse X-Position = 1 - 10
  var v = map(mouseX, 0, width, 1, 10);
  // Posterize Filter = Mouse X
  filter(POSTERIZE, v);
}
