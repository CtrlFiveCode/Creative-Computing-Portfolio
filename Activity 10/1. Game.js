// Variable Declaration

// Initial Cloud X-Coordinate
let cloudX = 0;
// Initial Cloud Y-Coordinate
let cloudY = 60;
// Font Variable
let font;
// Current Game State
let gameState = "mainmenu";
// Player Oject
let player;
// Player Score
let score = 0;
// Player High Score
let highScore = 0;
// Array to Store Pipes
let pipes = [];

// - - - - - - - - - -

// Setup Functions

// Load Font First
function preload() {
  font = loadFont("pixelfont.ttf");
}

function setup() {
  // Create Canvas
  createCanvas(600, 400);
  textAlign(CENTER, CENTER);
  textFont(font);

  // New Player Object
  player = new Player();
}

// - - - - - - - - - -

// Draw Functions

// Draw Elements
function draw() {
  // If Main Menu
  if (gameState === "mainmenu") {
    // Background
    drawBackground();
    // Play Button
    drawPlayButton();
    // Uni Title
    drawText();

    // If Playing
  } else if (gameState === "playing") {
    // Game Elements
    drawGame();
    // Player Score
    drawScore();
    // Player High Score
    drawHighScore();

    // If Game Over
  } else if (gameState === "gameover") {
    // Background + Main Menu Button
    drawgameover();
    // Play High Score
    drawHighScore();
  }
}

// Background Elements
function drawBackground() {
  // Bacground Color = Sky Blue
  background(135, 206, 250);

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
  text("BATHSPA", width / 2, height / 2 - 100);

  // Write 'UNIVERSITY'
  text("UNIVERSITY", width / 2, height / 2 - 50);
}

// Write Score
function drawScore() {
  textSize(18); // Set text size
  fill(255); // White color
  text("Score: " + score, width - 120, 30); // Display score
}

// Write High Score
function drawHighScore() {
  textSize(18);
  fill(255);
  text("High Score: " + highScore, 135, 30);
}

// Draw Play Button
function drawPlayButton() {
  let buttonWidth = 150;
  let buttonHeight = 50;
  // Button X-Cord
  let buttonX = width / 2 - buttonWidth / 2;
  // Button Y-Cord
  let buttonY = height / 2 + 50;
  // Color = Green
  fill(0, 128, 0);
  // Draw Button
  rect(buttonX, buttonY, buttonWidth, buttonHeight, 10);
  fill(255);
  textSize(24);
  // Write "Play"
  text("Play", width / 2, buttonY + buttonHeight / 2);
}

// Draw Game Over Screen
function drawgameover() {
  // Background Color = Black
  background(20);
  textAlign(CENTER, CENTER);
  fill(255);
  textSize(32);
  // Write "Game Over"
  text("Game Over", width / 2, height / 2 - 50);

  // Update High Score
  if (score > highScore) {
    highScore = score;
  }

  // Draw Play Button
  let buttonWidth = 150;
  let buttonHeight = 50;
  // Button X-Cord
  let buttonX = width / 2 - buttonWidth / 2;
  // Button Y-Cord
  let buttonY = height / 2 + 50;
  // Color = Green
  fill(0, 128, 0);
  // Draw Button
  rect(buttonX - 50, buttonY, buttonWidth + 100, buttonHeight, 10);
  fill(255);
  textSize(24);
  // Write "Main Menu"
  text("Main Menu", width / 2, buttonY + buttonHeight / 2);
}

// - - - - - - - - - -

// Game Control Functions

// Handle Mouse Clicks
function mousePressed() {
  // If Game on Main Menu
  if (gameState === "mainmenu") {
    let buttonWidth = 150;
    let buttonHeight = 50;
    // Button X-Cord
    let buttonX = width / 2 - buttonWidth / 2;
    // Button Y-Cord
    let buttonY = height / 2 + 50;
    // If Click on Button
    if (
      mouseX > buttonX &&
      mouseX < buttonX + buttonWidth &&
      mouseY > buttonY &&
      mouseY < buttonY + buttonHeight
    ) {
      // Transition to Playing
      gameState = "playing";
    }

    // If Game on Game Over
  } else if (gameState === "gameover") {
    let buttonWidth = 150;
    let buttonHeight = 50;
    // Button X-Cord
    let buttonX = width / 2 - buttonWidth / 2;
    // Button Y-Cord
    let buttonY = height / 2 + 50;
    // If Click on Button
    if (
      mouseX > buttonX &&
      mouseX < buttonX + buttonWidth &&
      mouseY > buttonY &&
      mouseY < buttonY + buttonHeight
    ) {
      // Reset to Main Menu
      gameState = "mainmenu";
      // Reset Player
      player.reset();
      // Reset Score
      resetScore();
    }
  }
}

// Draw Game Elements
function drawGame() {
  // Background
  drawBackground();
  // Update Player Position
  player.update();
  // Draw Player
  player.show();

  // Draw Pipes
  for (let i = pipes.length - 1; i >= 0; i--) {
    // Show Pipe
    pipes[i].show();
    // Update Pipe Position
    pipes[i].update();

    // Check Player Collision
    if (pipes[i].hits(player)) {
      // Transition to Game Over
      gameState = "gameover";
      // Empty Pipe Array
      pipes = [];

      // Update High Score
      if (score > highScore) {
        highScore = score;
      }

      // Exit Pipe Making Loop
      break;
    }

    // Remove Off-Screen Pipes
    if (pipes[i].offscreen()) {
      // Remove Pipe from Array
      pipes.splice(i, 1);
    }
  }

  // Generate New Pipes
  if (frameCount % 100 === 0) {
    // Add Pipe to Array
    pipes.push(new Pipe());
    // Increment Score
    score++;
  }
}

// Handle Key Presses
function keyPressed() {
  // If Space Bar & Game is Playing
  if (keyCode === 32 && gameState === "playing") {
    // Make Player Jump
    player.jump();
  }
}

// - - - - - - - - - -

// Player and Pipe Classes

class Player {
  constructor() {
    // Initial Player X-Cord
    this.x = 50;
    // Initial Player Y-Cord
    this.y = height - 100;
    // Player Size
    this.size = 30;
    // Gravity Strength
    this.gravity = 0.6;
    // Player Jump Speed
    this.jumpSpeed = -8;
    // Initial Player Velocity
    this.velocity = 0;
  }

  // Update Player Position
  update() {
    // Apply Gravity
    this.velocity += this.gravity;
    // Update Vertical Position
    this.y += this.velocity;

    // Prevent Player from Falling through Ground
    if (this.y >= height - 75) {
      this.y = height - 75;
      this.velocity = 0;
    }
  }

  // Draw Player
  show() {
    // Color = Royal Blue
    fill(0, 100, 200);
    // Draw Player
    ellipse(this.x, this.y, this.size, this.size);
  }

  // Reset Player Position
  reset() {
    // Set Y-Cord to Ground
    this.y = height - 75;
    // Reset Vertical Velocity
    this.velocity = 0;
  }

  jump() {
    // Set Vertical Velocity to Jump Speed
    this.velocity = this.jumpSpeed;
  }
}

class Pipe {
  constructor() {
    // Spacing Top & Bottom Pipes
    this.spacing = 125;
    // Lower Pipe Position
    this.top = random(height / 6, (3 / 4) * height);
    // Upper Pipe Position
    this.bottom = this.top + this.spacing;
    // Initial Pipe X-Cord
    this.x = width;
    // Pipe Width
    this.w = 60;
    // Initial Pipe Speed
    this.speed = 2;
    // Speed Increase Rate
    this.speedIncrement = 0.01;
    // Player Collision Flag
    this.highlight = false;
  }

  // If Pipe Off-Screen
  offscreen() {
    return this.x < -this.w;
  }

  // Check Player Collision
  hits(player) {
    if (
      player.y - player.size / 2 < this.top ||
      player.y + player.size / 2 > this.bottom
    ) {
      if (
        player.x + player.size / 2 > this.x &&
        player.x - player.size / 2 < this.x + this.w
      ) {
        // Highlight Pipe
        this.highlight = true;
        // Collision Detected
        return true;
      }
    }
    // Reset Highlighting
    this.highlight = false;
    // No Collision Detected
    return false;
  }

  // Update Pipe Position & Speed
  update() {
    // Move Pipe
    this.x -= this.speed;
    // Increase Speed
    this.speed += this.speedIncrement;
  }

  // Draw Pipe
  show() {
    // Color = Green
    fill(0, 200, 0);
    // If Collision
    if (this.highlight) {
      // Color = Red
      fill(255, 0, 0);
    }
    // Draw Top Pipe
    rect(this.x, 0, this.w, this.top);
    // Draw Bottom pipe
    rect(this.x, this.bottom, this.w, height - this.bottom);
  }
}

// - - - - - - - - - -

// Utility Functions

// Reset Player Score
function resetScore() {
  score = 0;
}
