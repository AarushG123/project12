var garden,rabbit,apple;
var gardenImg,rabbitImg,appleImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

apple = createSprite(random(400,300),random(200,100))
apple.addImage(appleImg)
apple.scale = 0.09


}
function createApple(){
  apple = createSprite(random(400,10),random(10,200))
  apple.addImage(appleImg)
  apple.scale = 0.09
}

function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  apple.velocityY = 2
  rabbit.x = World.mouseX
  
  if (apple.y > 400){
    createApple()
  }

  drawSprites();
  
}