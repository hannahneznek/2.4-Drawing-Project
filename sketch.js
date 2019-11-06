var strokecolor = (0, 0, 0);
var weight = 5;
var rectangle = (0, 0, 0, 0);
var slider1;
var slider2;
var slider3;
var colortext;
var slider4;
var slider5;
var slider6;
var img;

function preload() {
  img = loadImage('bunny.png');
  img2 = loadImage('sun.jpg');
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  background(220);
  // button = createButton("blue");
  //  button.position(40, 35);
  //button.mousePressed(changeColor);
  // button = createButton("stroke weight");
  //  button.position(110, 35);
  //button.mousePressed(changeWeight);
  button = createButton("eraser");
  button.position(400, 50);
  button.mousePressed(eraser);
  //button = createButton("pink");
  //button.position(320, 35);
  //button.mousePressed(colorChange);
  textSize(20);
  text('press SHIFT to reset controls', 480, 20);
  text('press DELETE to clear canvas', 480, 45);
  slider1 = createSlider(0, 300, 0);
  slider1.position(10, 60);
  slider2 = createSlider(0, 300, 0);
  slider2.position(10, 80);
  slider3 = createSlider(0, 300, 0);
  slider3.position(10, 100);
  slider4 = createSlider(2, 30, 0);
  slider4.position(190, 60);
  text('color(RBG)', 10, 40);
  text('stroke size', 190, 40);
  text('press ENTER for a template', 480, 70);



}

function draw() {
  noFill();
  stroke(0);
  stroke(slider1.value(), slider2.value(), slider3.value());
  strokeWeight(3);
  strokeWeight(slider4.value());
  if (mouseIsPressed && mouseY > 140) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
  strokeWeight(0);
  print(mouseX, mouseY);
  //eraser button
  fill(0, 255, 0);
  ellipse(425, 60, 80, 80);
  noStroke();
  fill(slider1.value(), slider2.value(), slider3.value());
  rect(120, 10, 40, 40);
  ellipse(320, 40, slider4.value(), slider4.value());

}


function eraser() {
  slider1.value(220);
  slider2.value(220);
  slider3.value(220);
}


function keyPressed() {
  if (keyCode === BACKSPACE) {
    background(220);
    fill(0);
    textSize(20);
    text('press SHIFT to reset', 480, 20);
    text('press DELETE to delete drawing', 480, 45);
    text('color(RBG)', 10, 40);
    text('stroke size', 190, 40);
    text('press ENTER for a template', 480, 70);
  }
  if (keyCode === ENTER) {
    image(img, 175, 175, 400, 400);

  }
  if (keyCode === SHIFT) {
    slider1.value(0);
    slider2.value(0);
    slider3.value(0);
    slider4.value(2);
  }
  if (keyCode ===
  }