let bgcolor;
//create variable for input
let input;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  frameRate(15);
  canvas.position(0, 0);
  canvas.class("container");

  //create a random fill
  bgcolor = { r: 245, g: 106, b: 0 };
  //   bgcolor.r = random(0, 255);
  //   bgcolor.g = random(0, 255);
  //   bgcolor.b = random(0, 255);

  //create a div for our value
  textcolor = { r: random(0, 255), g: random(0, 212), b: 0 };

  background(bgcolor.r, bgcolor.g, bgcolor.b);

  slider = createSlider(100, 700, 0);
  slider.class("slider");
  //   textFont("Inconsolata");
}

function draw() {
  //target the HTML value of our variable birthday, and set the contents to be the value of our variable input
  // birthday.html(input.value());
  frequency = slider.value() - 100;
  wormSize = slider.value();
  for (let i = 0; i < frequency; i++) {
    push();
    fill(random(255), textcolor.g, textcolor.b);
    translate(random(width), random(height));
    // rotate(random(HALF_PI - QUARTER_PI));
    textSize(20);
    text("SANDWORM", 20, 0);
    pop();
  }
  noStroke();
  fill(bgcolor.r, bgcolor.g, bgcolor.b, 90);
  ellipse(mouseX, mouseY, wormSize, wormSize);
  fill(bgcolor.r, bgcolor.g, bgcolor.b, 60);
  ellipse(mouseX, mouseY, wormSize + 100, wormSize + 100);
  fill(bgcolor.r, bgcolor.g, bgcolor.b, 40);
  ellipse(mouseX, mouseY, wormSize + 200, wormSize + 200);
}

function mousePressed() {
  bgcolor.g = random(96, 180);
  bgcolor.r = random(202, 249);
  background(bgcolor.r, bgcolor.g, bgcolor.b);
  textcolor = { r: random(0, 255), g: random(0, 212), b: 0 };
}
