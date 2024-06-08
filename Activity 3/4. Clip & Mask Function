// Variable Declaration
let img, mask;
let circleSize = 185;
let margin = 10;

// Preload Image
function preload() {
  img = loadImage("cat.png");
}

function setup() {
  // Creates Canvas (width, height)
  createCanvas(400, 400);

  // Creates Graphics Buffer (width, height)
  mask = createGraphics(400, 400);

  // Draw Circles at Each Corner
  // Top Left
  mask.circle(
    margin + circleSize / 2,
    margin + circleSize / 2,
    circleSize
  );
  // Top Right
  mask.circle(
    width - margin - circleSize / 2,
    margin + circleSize / 2,
    circleSize
  );
  // Bottom Left
  mask.circle(
    margin + circleSize / 2,
    height - margin - circleSize / 2,
    circleSize
  );
  // Bottom Right
  mask.circle(
    width - margin - circleSize / 2,
    height - margin - circleSize / 2,
    circleSize
  );
}

function draw() {
  // Background Color = Dark Slate Blue
  background(0, 50, 100);

  // Apply Mask to Image
  img.mask(mask);

  // Cat Image
  image(img, 0, 0);
}
