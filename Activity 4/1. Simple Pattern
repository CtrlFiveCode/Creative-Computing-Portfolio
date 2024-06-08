function setup() {
  // Creates Canvas (width, height)
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // Variable Declaration
  let spacing = 25;
  let circleSize = 35;
  let cols = width / spacing;
  let rows = height / spacing;
  
  // Circle Pattern
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      // Center of the current circle
      let x = i * spacing + spacing / 2;
      // Center of the current circle
      let y = j * spacing + spacing / 2; 
      // Color = Rosy Brown
      fill(150, 100, 100);
      // Draw Larger Circle
      ellipse(x, y, circleSize, circleSize);
      // Size of Smaller Circle
      let smallerCircleSize = circleSize / 1.5;
      //Color = Black
      fill(0);
      // Draw Smaller Circle
      ellipse(x, y, smallerCircleSize, smallerCircleSize);
    }
  }
}