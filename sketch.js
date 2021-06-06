var spacebg;
var space;

var spaceship, spaceshipImg;

var enemy1, enemy1Img, enemy2, enemy2Img, enemy3, enemy3Img, enemyboss, enemybossImg;


function preload(){
    spacebg = loadImage("spacebg.jpg");
    spaceshipImg = loadImage("spaceship.png");

    enemy1Img = loadImage("enemy1.png");
    enemy2Img = loadImage("enemy2.png");
    enemy3Img = loadImage("enemy3.png");

    enemybossImg = loadImage("enemyboss.png");
}

function setup() {
  createCanvas(displayWidth, displayHeight);

  //background sprite
  space = createSprite(0,0,width,height);
  space.addImage(spacebg);
  space.scale = 2.5;

  //player spaceship
  spaceship = createSprite(width/4,height/2);
  spaceship.addImage(spaceshipImg);
  spaceship.scale = 0.5;

}

function draw(){
    background(0);

    //infinite background
    space.velocityX = -2;

    if(space.x <0 ){
        space.x = space.width/2;
    }

    spawnEnemies();
    drawSprites();
}

function spawnEnemies(){
    //enemy spaceships

    if(frameCount % 200 === 0){
        enemy1 = createSprite(width+100, Math.round(random(height/4, height-200)), 20, 20);
        enemy1.addImage(enemy1Img);
        enemy1.rotation = -90;
        enemy1.velocityX = -2;
    }
}