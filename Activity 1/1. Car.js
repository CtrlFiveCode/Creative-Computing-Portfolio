// Creates Canvas (width, height)
function setup() {
  createCanvas(600, 400);
}

function draw() {
  // Background Color = Sky Blue
  background(135, 206, 250);

  // Sets fill color = white
  fill(255);

  // Body
  // Color = Bright Pink
  fill(255, 105, 180);
  // Bottom Body
  rect(50, 200, 300, 50);
  // Top Body
  rect(50, 150, 200, 50);

  // Wheels
  // Color = Black
  fill(0);
  // Left Wheel
  ellipse(100, 250, 50, 50);
  // Right Wheel
  ellipse(300, 250, 50, 50);

  // Color = White
  fill(255);
  // Left Wheel Cover
  ellipse(100, 250, 20, 20);
  // Right Wheel Cover
  ellipse(300, 250, 20, 20);

  // Roof
  // Color = White
  fill(255);
  // Roof
  triangle(45, 150, 300, 160, 200, 120);

  // Headlights
  // Color = Yellow
  fill(255, 255, 0);
  // Back Light
  ellipse(50, 200, 10, 20);
  // Front Light
  ellipse(350, 200, 20, 10);

  // Tail Lights
  // Color = Orange-Red
  fill(255, 69, 0);
  // Back Light
  ellipse(50, 250, 10, 20);
  // Front Light
  ellipse(350, 250, 20, 10);

  // Road
  // Color = Grey
  fill(47, 79, 79);
  // Road
  rect(0, 275, 600, 25);

  // Road Paint
  // Color = White
  fill(255);
  // Stripe 1
  rect(25, 275, 50, 10);
  // Stripe 2
  rect(200, 275, 50, 10);
  // Stripe 3
  rect(375, 275, 50, 10);
  // Stripe 4
  rect(550, 275, 50, 10);

  // Grass
  // Color = Grass Green
  fill(0, 154, 23);
  // Grass
  rect(0, 300, 600, 100);
}
