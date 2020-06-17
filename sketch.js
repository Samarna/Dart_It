
var form;


function preload() {
  backgroundImg = loadImage("images/images.jpg");
}

function setup() {
  createCanvas(displayWidth - 40,displayHeight-90);
  form = new Form();
}


function draw() {
  background(backgroundImg);
  console.log(displayWidth);

  drawSprites();

  noStroke();
  textSize(65);
  fill("black");
  text("Dart It !",displayWidth/2 - 100, 100);
  textSize(35);
  text("The game in which you are what you dart!",displayWidth/3 - 110, 150);
  form.display();
}