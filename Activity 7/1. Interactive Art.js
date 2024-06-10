// Variable Declaration
// Initial Cloud X-Coordinate
let cloudX = 0;
// Initial Cloud Y-Coordinate
let cloudY = 60;
// Font Variable
let font;
// Array to Store Trees
let trees = [];
// Tree Move Speed
let treeSpeed = 1.5;

// Load Font First
function preload() {
  // Load the Font First
  font = loadFont("pixelfont.ttf");
}

function setup() {
  // Create Canvas
  createCanvas(600, 400);   
  textAlign(CENTER, CENTER);
  textFont(font);

  // Create Initial Trees
  for (let i = 0; i < 5; i++) {
    // Position Trees Off-Screen
    trees.push(new Tree(width + i * 200));
  }
}

function draw() {
  // Draw Background, Text, and Trees
  drawBackground();
  drawText();
  drawTrees();
}

function drawBackground() {
  // Background Color = Sky Blue
  background(135, 206, 250);

  // Draw Ground
  // Top Layer Color = Grass Green
  fill(155, 228, 85);
  rect(0, height - 60, width, 15);

  // Middle Layer Color = Dirt Brown
  fill(216, 166, 80);
  rect(0, height - 50, width, 5);

  // Bottom Layer Color = Light Brown
  fill(221, 216, 150);
  rect(0, height - 45, width, 45);

  // Draw Clouds
  // Cloud 1
  drawCloud(cloudX, cloudY);
  // Cloud 2
  drawCloud(cloudX - 200, cloudY + 30);

  // Move Clouds (Loop)
  cloudX = (cloudX + 1) % (width + 100);
}

function drawCloud(x, y) {
  // Disable Stroke for Clouds
  noStroke();

  // Cloud Color Gradient
  let cloudColor1 = color(255, 255, 255, 200);
  let cloudColor2 = color(255, 255, 255, 0);

  // Draw Cloud with Gradient
  for (let i = 0; i < 60; i += 20) {
    // Interpolate Color
    fill(lerpColor(cloudColor1, cloudColor2, i / 60));
    // Draw Cloud Top
    rect(floor((x + i) / 20) * 20, floor(y / 20) * 20, 20, 20);
    // Draw Cloud Bottom
    rect(floor((x - i + 40) / 20) * 20, floor((y + 20) / 20) * 20, 20, 20);
  }
}

function drawText() {
  // Text Size
  textSize(24);
  fill(255);
  // Write 'BATHSPA'
  text("BATHSPA", width / 2, height / 2);

  // Write 'UNIVERSITY'
  text("UNIVERSITY", width / 2, height / 2 + 50);
}

function drawTrees() {
  // Draw Trees
  for (let tree of trees) {
    tree.update();
    tree.show();
  }

  // Recycle Trees
  if (trees.length > 0 && trees[0].x < -trees[0].w) {
    // Add New Tree
    trees.push(new Tree(trees[trees.length - 1].x + 200));
    // Remove Off-Screen Tree
    trees.shift();
  }
}

class Tree {
  constructor(startX) {
    // Tree X-Coordinate
    this.x = startX;
    // Tree Width
    this.w = 20;
    // Tree Gap
    this.gap = 100;
    // Tree Height
    this.treeHeight = random(25, height / 2.5 - this.gap);
  }

  update() {
    // Move Tree
    this.x -= treeSpeed;
  }

  show() {
    // Tree Trunk Color = Brown
    fill(139, 69, 19);
    // Draw Tree Trunk
    rect(this.x, height - this.treeHeight, this.w, this.treeHeight);

    // Tree Leaves Color = Green
    fill(34, 139, 34);
    // Draw Tree Leaves (Triangle)
    triangle(
      // Left Point
      this.x - 20, height - this.treeHeight,
      // Right Point
      this.x + this.w + 20, height - this.treeHeight,
      // Top Point
      this.x + this.w / 2, height - this.treeHeight - this.treeHeight * 6
    );
  }
}
