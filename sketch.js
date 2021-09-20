var END;
var PLAY;
var gameState=PLAY;
var boy,Junglebg,obstacle1,ground,restart1
var boyImg,obstacle1Img,JunglebgImg,groundImg,restart1Img
var obstacleGroup,obstacle

function preload(){
JunglebgImg=loadImage("Junglebg.jpg")
boyImg=loadAnimation("boy3.png","boy4.png")
obstacle1Img=loadImage("obstacle1.png")
groundImg=loadImage("ground.png")
restartImg=loadImage("restart.png")

}

function setup() {
    createCanvas(windowWidth,windowHeight);

    invisibleGround = createSprite(200,580,400,10);
    invisibleGround.visible = false;

    Junglebg=createSprite(900,140,900,200)
    Junglebg.addImage(JunglebgImg)
    Junglebg.scale=2.5;
    Junglebg.velocityX=-5;
    Junglebg.x=Junglebg.width/4;

    restart=createSprite(400,200)
  restart.addImage(restartImg)
  restart.scale=1;
 
    boy=createSprite(100,500,20,20)
    boy.addAnimation("running",boyImg)
    boy.scale=0.4

    obstacleGroup=new Group();
    score=0
}

function draw() {
   background("black")
   



if(gameState===PLAY){
    score = score + Math.round(getFrameRate()/60);
    Junglebg.velocityX = -(3+ 3*score/100);

    if(keyDown("space")&& boy.y>=400){
        boy.velocityY=-8
    }
        boy.velocityY=boy.velocityY+0.30

if(Junglebg.x<0){
    Junglebg.x=Junglebg.width /2
}

    restart.visible=false;

 boy.collide(invisibleGround);

 obstacle();
    if(obstacleGroup.isTouching(boy)){
      gameState=END;
    }
}
else if(gameState===END){
restart.visible=true;
Junglebg.velocityX=0;
boy.velocityY=0
obstacleGroup.velocityX=0;
obstaclesGroup.setLifetimeEach(-1);

}


 drawSprites();
 fill("red")
 textSize(40);
 stroke("green")
 strokeWeight(5);
   text("Score: "+ score, 100,50);
}

function obstacle(){
    if(frameCount % 50===0){
         obstacle1=createSprite(1200,500,20,20)
        obstacle1.addImage(obstacle1Img)
        obstacle1.scale=0.5
        obstacle1.velocityX=-18
    }
    }