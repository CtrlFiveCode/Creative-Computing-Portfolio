// Variable Declaration
let song;
// Fast Fourier Transform Analyzer
let fft;
let backgroundImage;
// Initial Bar Rotation Angle
let angle = 90;
// Bar Numbers
let bars = 64;

// Load Audio & Background First
function preload() {
  // Call Function when Song Loaded
  song = loadSound('On&On.mp3', loaded);
  backgroundImage = loadImage('On&On.jpg');
}

function setup() {
  // Create Canvas
  createCanvas(800, 800);
  
  // Initialize FFT Object
  fft = new p5.FFT();
}

function draw() {
  // Background = On&On Image
  background(backgroundImage);
  
  // Check if Song Playing
  if (song.isPlaying()) {
    // Get Spectrum Data from Song
    let spectrum = fft.analyze(bars);
  
    // Define Bar Parameters
    // Radius of Circular Pattern
    let radius = min(width, height) / 3;
    let barWidth = 10;
    let barHeightMultiplier = 0.5;
  
    // Draw Bars
    for (let i = 0; i < bars; i++) {
      // Calculate Angle Step
      let angleStep = map(i, 0, bars, 0, TWO_PI);
      // X-Cord
      let x = width / 2 + radius * cos(angle + angleStep);
      // Y-Cord
      let y = height / 2 + radius * sin(angle + angleStep);
      // Limit Bar Height
      let barHeight = min(spectrum[i] * barHeightMultiplier, dist(x, y, width / 2, height / 2));
      // Bar Start X-Cord
      let barX = x + barHeight * cos(angle + angleStep);
      // Bar Start Y-Cord
      let barY = y + barHeight * sin(angle + angleStep);
      // Bar End X-Cord
      let barX2 = x - barHeight * cos(angle + angleStep);
      // Bar End Y-Cord
      let barY2 = y - barHeight * sin(angle + angleStep); 
    
      // Bar Color & Transparency
      stroke(255, 255, 255, 50);
      // Bar Thickness
      strokeWeight(barWidth);
      // Draw Bar
      line(barX, barY, barX2, barY2);
    }
  
    // Bars Spin Speed
    angle -= 0.0025;
  } else {
    // If Song Ended, Loop
    song.loop();
  }
}

function loaded() {
  // Start Song when Loaded
  song.play();
}
