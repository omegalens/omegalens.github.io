let hyperspaceShader;
let direction = 1;

  
function preload() {
  hyperspaceShader = loadShader("hyperspace.vert", "hyperspace.frag");
}

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function mouseClicked() {
    direction = -direction;
}

function draw() {
    background(0);
  
    // Set the shader
    shader(hyperspaceShader);
  
    // Pass the required uniform values
    hyperspaceShader.setUniform("uTime", millis() * 0.001);
    hyperspaceShader.setUniform("uResolution", [width, height]);
    hyperspaceShader.setUniform("uMouse", [mouseX / width, 1.0 - mouseY / height]);
    hyperspaceShader.setUniform("uDirection", direction);


  
    // Draw a rectangle to cover the entire canvas
    quad(-1, -1, 1, -1, 1, 1, -1, 1);
  }
  