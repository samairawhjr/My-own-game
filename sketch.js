var bgImage;
var sam, samImage;
var ground;

function preload(){
  gameOverimage = loadImage("gameOver.png");
  bgImage = loadImage("road.jpg");
  samImage = loadAnimation("X5Nj.gif");
}

// setup is for tings which only run once
function setup() {
  createCanvas(displayWidth - 17, displayHeight - 143);
  sam = createSprite(displayWidth/2, displayHeight - 300);
  
  ground = createSprite(displayWidth/2, displayHeight - 100, displayWidth, 5);
  ground.visible = false;
}

// to make certain things permanent
function draw() {
  background(bgImage);

  if (keyDown(RIGHT_ARROW)) {
   sam.x = sam.x + 3;
  }

  if (keyDown(LEFT_ARROW)) {
   sam.x = sam.x - 3;
  }

  if (keyDown("space")&& sam.y >= 615){
   sam.velocityY = -7;
  }
  sam.velocityY = sam.velocityY + 0.2;

  sam.collide(ground);

  console.log(sam.y);

  drawSprites();
}

