var testI,fI;
var test,fire;
var manas_gadha_hai=false;
var sI;

function preload(){
    testI = loadImage("images/iron_man_flying.png");
    bg = loadImage("images/galaxy.png");
    fI = loadImage("images/leg1.png");
    sI = loadImage("images/shooting.png");
}

function setup(){
    createCanvas(displayWidth,displayHeight-110);
    test = createSprite(displayWidth-1300,displayHeight-600);
    test.addImage(testI);
    test.scale=0.5;
   
    fire = createSprite(test.x-125,test.y+15);
    fire.addImage(fI);
    fire.scale=0.05;
}

function draw (){
background(bg);

camera.position.y=height/2

test.depth=test.depth+3;
fire.x=test.x-125;
fire.y=test.y+15;

if(keyDown("up")){
    test.y=test.y-5;
}
if(keyDown("down")){
    test.y=test.y+5;
}
if(keyDown("right")){
    test.x=test.x+5;
    camera.position.x=test.x;
    }
    if(keyWentDown("space")){
        test.addImage(sI);
        test.scale=0.8;
        fire.visible=false;
    }
    if(keyWentUp("space")){
        test.addImage(testI);
        fire.visible=true;
        test.scale=0.5;
    }
    console.log("Vibhu Smart Hai : " + "true");
    drawSprites();
}