// Trail Elements Array
let trail = [];
let prevColor;

function setup() {
  // Create Canvas
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // Clear Background / Frame
  background(25);

  // New Shape Random Color
  let r = random(0, 255);
  let g = random(0, 255);
  let b = random(0, 255);
  let newColor = color(r, g, b, 50);

  // Store Previous Color
  if (!prevColor) {
    prevColor = newColor;
  }

  // Color = Random
  fill(newColor);
  // Draw New Shape
  rect(mouseX - 25, mouseY - 25, 50, 50);

  // Update Trail Elements
  trail.forEach((trailElement) => {
    // If trailElement Exists
    if (trailElement) {
      fill(
        red(trailElement.color),
        green(trailElement.color),
        blue(trailElement.color),
        trailElement.alpha
      );
      // Draw Square
      rect(
        trailElement.x - trailElement.size / 2,
        trailElement.y - trailElement.size / 2,
        trailElement.size,
        trailElement.size
      );
      // Shrink Trail
      trailElement.size *= 0.99;
      // Reduce Trail Alpha
      trailElement.alpha -= 0.5;
    }
  });

  // Remove Transparent Trail
  trail = trail.filter((trailElement) => trailElement.alpha > 0);

  // Add New Shape
  let trailElement = {
    x: mouseX,
    y: mouseY,
    // Initial Values
    size: 50,
    color: newColor,
    alpha: 50, 
  };
  trail.push(trailElement);

  // Update Previous Color
  prevColor = newColor;
}
