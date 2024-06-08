// Ensure Font Loads First
let font;

function preload() {
  // Load Custom Font
  font = loadFont("Minecraft.ttf");
}

function setup() {
  // Creates Canvas (width, height)
  createCanvas(600, 200);
  textAlign(CENTER, CENTER);
  textFont(font);
}

function draw() {
  // Background Color
  background(25);

  // Variable Declaration
  let word1 = "BATH SPA";
  let word2 = "UNIVERSITY";
  let spacing = 60;
  textSize(60);

  // Canvas Center
  let centerX = width / 2;
  let centerY = height / 2;

  // Line 1 Gradient Colors
  // Red
  let startColor1 = color(255, 0, 0);
  // Cyan
  let endColor1 = color(0, 255, 255);

  // Loop Write Line 1
  for (let i = 0; i < word1.length; i++) {
    // Each Letter X-Cords
    let x = centerX - ((word1.length - 1) * spacing) / 2 + i * spacing;
    // Line 1 Y-Cord
    let y = centerY - 40;

    // Gradient Interpolation Value
    let t = i / (word1.length - 1);
    // Current Letter Color
    let currentColor = lerpColor(startColor1, endColor1, t);

    // Color = Var
    fill(currentColor);
    // Write Letter
    text(word1.charAt(i), x, y);
  }

  // Line 1 Gradient Colors
  // Cyan
  let startColor2 = color(0, 255, 255);
  // Red
  let endColor2 = color(255, 0, 0);

  // Loop Write Line 2
  for (let i = 0; i < word2.length; i++) {
    // Each Letter X-Cords
    let x = centerX - ((word2.length - 1) * spacing) / 2 + i * spacing;
    // Line 2 Y-Cord
    let y = centerY + 40;

    // Gradient Interpolation Value
    let t = i / (word2.length - 1);
    // Current Letter Color
    let currentColor = lerpColor(startColor2, endColor2, t);

    // Color = Var
    fill(currentColor);
    // Write Letter
    text(word2.charAt(i), x, y);
  }
}
