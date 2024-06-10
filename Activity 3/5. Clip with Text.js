// Variable Declaration
let img, mask;


// Preload Image
function preload() {
  img = loadImage("cat.png");
}

function setup() {
  // Creates Canvas (width, height)
  createCanvas(400, 400);

  // Creates Graphics Buffer (width, height)
  mask = createGraphics(400, 400);

  // Set Mas Properties
  mask.textSize(150);
  mask.textAlign(CENTER, CENTER);

  // Draw Text
  mask.text("CUTE", mask.width / 2, mask.height / 3);
  mask.text("CAT", mask.width / 2, mask.height / 1.5);
}

function draw() {
  // Background Color = Dark Slate Blue
  background(0, 50, 100);

  // Apply Mask to Image
  img.mask(mask);

  // Cat Image
  image(img, 0, 0);
}
