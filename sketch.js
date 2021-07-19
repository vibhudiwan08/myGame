var testI,fI;
var test;
var fire;
var sI;
var eA;
var enemies;
var back1;
var obstaclesGroup;
var hitting=false;
var score=0;
var enemy=[];
var highScore=[];
var handFire,hI;
var ufoI,ufo;
var lI,lI2;
var laser,laser2;
var devil1,devilI;
var devilT=0,devilGroup,gameState=1,laserGroup;
var button,buttonI;
var s1,s2,s3,st1,st2,st3;

function preload(){
    testI = loadImage("images/iron_man_flying.png");
    bg = loadImage("images/galaxy2.png");
    fI = loadImage("images/leg1.png");
    sI = loadImage("images/shooting1.png");
    ea=loadAnimation("images/en1.png","images/en2.png");
    hI=loadImage("images/firy.png");
    ufoI = loadImage("images/ufo1.png");
    lI = loadImage("images/green laser 1.png");
    devilI=loadAnimation("images/dr1.png","images/dr2.png","images/dr3.png","images/dr4.png","images/dr5.png");
    buttonI = loadImage("images/start1.png");
    s1 = loadImage("images/mainStyle.png");
    s2 = loadImage("images/style1.png");
    s3 = loadImage("images/style2.png");
    laserGroup = new Group();
}


function setup(){
    createCanvas(displayWidth,displayHeight-90);
    test = createSprite(displayWidth-1300,displayHeight-600);
    test.addImage(testI);
    test.scale=0.5;
    test.debug=true;
   
    back1 = createSprite(0,0,windowWidth/2+windowWidth,windowHeight/2);
    back1.addImage(bg);
    back1.scale=1;
    
    ufo = createSprite(displayWidth+450,displayHeight/2-200);
    ufo.addImage(ufoI);
    ufo.scale=1.7;
    ufo.debug=true;
    
    fire = createSprite(test.x-125,test.y+15);
    fire.addImage(fI);
    fire.scale=0.05;

    obstaclesGroup = new Group();
    devilGroup= new Group();

    handFire = createSprite(test.x+160,test.y);
    handFire.addImage(hI);
    handFire.scale=0.8;
    handFire.debug=true;
    handFire.visible=false;

    button = createSprite(displayWidth/2,displayHeight/2);
    button.addImage(buttonI);
    button.scale=1;
    button.debug=true;

    st1 = createSprite(button.x-10,button.y-250);
    st1.addImage(s1);
    st1.scale=0.45; 

    st2 = createSprite(1300,450);
    st2.addImage(s2);
    st2.scale=0.65; 

    st3 = createSprite(200,450);
    st3.addImage(s3);
    st3.scale=0.65; 
    }

function draw (){

/*if(gameState===0){
  background(bg);
  fire.visible=false;
  laser.visible=false;
  if(World.mouseX.isTouching(button)){
      gameState=1;
  }
  drawSprites();
}*/
if(gameState===1){

background("white");

button.destroy();
st1.destroy();
st2.destroy();
st3.destroy();

test.depth=test.depth+3;
fire.x=test.x-125;
fire.y=test.y+15;

handFire.x=test.x+127;
handFire.y=test.y;

back1.velocityX=-2;

if(score<60){
    spawnEyes();
}else if (score>60){
    spawnLaser();
    ufo.velocityX=-2;
}
if(frameCount%20===0){
     laserGroup.destroyEach();
}

if(back1.x<50){
    back1.x=back1.width/2;
}
if (score>=20&&score<60){
devil();
}

if(keyDown("up")){
    test.y=test.y-5;
}
if(keyDown("down")){
    test.y=test.y+5;
}
if(keyDown("right")){
    test.x=test.x+5;
   
    }
    if(keyWentDown("space")){
        test.addImage(sI);
        test.x=test.x+45;
        test.scale=0.8;
        fire.visible=false;
        hitting=true;
        handFire.visible=true;
    }
    if(keyWentUp("space")){
        test.addImage(testI);
        fire.visible=true;
        test.scale=0.5;
        test.x=test.x-45;
        hitting= false;
        handFire.visible=false;
    }
    if(test.x>=windowWidth-10){
        test.x=test.x;
    }
    console.log(devilT);
    
    
if(handFire.isTouching(obstaclesGroup) && hitting === true){
    obstaclesGroup.destroyEach();
    score=score+5;
   }else if(handFire.isTouching(obstaclesGroup) && hitting === false){
    textSize(30);
    stroke("white");
    strokeWeight(10);
    text("G A M E  O V E R ");
    console.log("game over");
    obstaclesGroup.setLifetimeEach(-1);
    obstaclesGroup.setVelocityXEach(0);
}
if(handFire.isTouching(devilGroup)&& hitting === true){
      devilT=devilT+1;
}
if(handFire.isTouching(devilGroup)&&devilT>1&& hitting === true){
      devilGroup.destroyEach();
      score=score+7;
      devilT=0;
}else if(handFire.isTouching(devilGroup) && hitting === false){
    textSize(30);
    stroke("white");
    strokeWeight(10);
    text("G A M E  O V E R ");
    console.log("game over");
    devilGroup.setLifetimeEach(-1);
    devilGroup.setVelocityXEach(0);
}
    drawSprites();
    textSize(20);
    stroke("red");
    strokeWeight(3);
    text("S c o r e : " + score,250,50);
    text("BOSS WILL COME AFTER YOUR SCORE REACH 60",700,100);
    text("PRESS SPACE TO FIRE",700,170);
}

}

function spawnEyes(){
    if(frameCount%60===0){
    enemy.push[1]; 
    enemies = createSprite(displayWidth-10,10);
    enemies.position.y = Math.round(random(110,650));
    enemies.addAnimation("running",ea);
    enemies.scale=0.12;
    enemies.velocityX=-6;
    enemies.debug=true;
    obstaclesGroup.add(enemies);
    }
    
}
function devil(){
    if(frameCount%300===0){
        devil1=createSprite(displayWidth+250,10);
        devil1.position.y = Math.round(random(110,650));
        devil1.addAnimation("lol",devilI);
        devil1.scale=1.5;
        devil1.velocityX=-5;
        devil1.debug=true;
        devilGroup.add(devil1);
    }
}
function spawnLaser(){
    if(frameCount%15===0){
        laser = createSprite(displayWidth/2,displayHeight/2);
        laser.addImage(lI);
        laser.scale=1;
        laser.debug=true; 
        laser.x=ufo.x-200;
        laser.y=ufo.y+80;
        laserGroup.add(laser);
    }
}
