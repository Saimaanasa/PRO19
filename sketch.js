var road,car1;
var car1,car2,car3;
var roadImg,carImg1,carImg2;

var oppPink1Img,oppPink2Img;
var oppYellow1Img,oppYellow2Img;
var oppRed1Img,oppRed2Img;
var gameOverImg,cycleBell;

var car1 , car2,car3; 

var END =0;
var PLAY =1;
var gameState = PLAY;

var distance=0;
var gameOver, restart;

function preload(){
  pathImg = loadImage("Road.png");
 car1= loadAnimation("car1");
  car2= loadAnimation("car2")
  car3 = loadAnimation("car3");
}

function setup(){
  
createCanvas(1200,300);
// Moving background
path=createSprite(100,150);
path.addImage(pathImg);
path.velocityX = -5;

//creating car running
car1 = createSprite(70,150);
car1.addAnimation("car running",car1Img1);
car1.scale=0.07;
  
//set collider for car
car1.setCollider(rectangle);
car1.debug=true;
  
gameOver = createSprite(650,150);
gameOver.addImage(gameOverImg);
gameOver.scale = 0.8;
gameOver.visible = false;  
  
pinkCG = new Group();
yellowCG = new Group();
redCG = new Group();
  
}

function draw() {
  background(0);
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Distance: "+ distance,900,30);
  
  if(gameState===PLAY){
    
   distance = distance + Math.round(getFrameRate()/50);
   path.velocityX = -(6 + 2*distance/150);
  
   mainCyclist.y = World.mouseY;
  
   edges= createEdgeSprites();
   mainCyclist .collide(edges);
  
  //code to reset the background
  if(path.x < 0 ){
    path.x = width/2;
  }
  
    //code to play sound
  if(keyDown("space")) {
    cycleBell.play();
  }
  
  //creating continous opponent players
  var select_oppCar = Math.round(random(1,3));
  
  if (World.frameCount % 150 == 0) {



    if (select_oppCar == 1) {
      car2();
    } else if (select_oppPlayer == 2) {
      car3();
    } 
    }
  }
  
   if(car2.isTouching(car2)){
     gameState = END;
     car1.velocityY = 0;
     car1.addAnimation("opponentCar1",oppCar3);
    }
    
    if(car3.isTouching(car3)){
      gameState = END;
    car2.velocityY = 0;
      car2.addAnimation("opponentPlayer2",oppcar3);
    }
    
  }if (gameState === END) {
    gameOver.visible = true;
    //Add code to show restart game instrution in text here
text("Press Up Arrow to Restart the game!",750,200,) ;
    road.velocityX = 0;
    car1.velocityY = 0;
    car1.addAnimation("carRunning",car1Img);
  
    car2.setVelocityyEach(0);
    car2.setLifetimeEach(-1);

    car3.setVelocityXEach(0);
    car3.setLifetimeEach(-1);

    //write condition for calling reset( )
    function reset()
}


function car1(){
        car1=createSprite(1100,Math.round(random(50, 250)));
        car1.scale =0.06;
        car1.velocityX = -(6 + 2*distance/150);
        car1.addAnimation("opponentPlayer1",oppcar1Img);
        car1.setLifetime=170;
        car1.add(player1);
}

function car2(){
        car2 =createSprite(1100,Math.round(random(50, 250)));
        car2.scale =0.06;
        car2.velocityX = -(6 + 2*distance/150);
        car2.addAnimation("opponentPlayer2",oppcar2Img);
        car2.setLifetime=170;
        car2.add(player2);
}

function car3(){
        car3 =createSprite(1100,Math.round(random(50, 250)));
        car3.scale =0.06;
        car3.velocityX = -(6 + 2*distance/150);
        car3.addAnimation("opponentPlayer3",oppcar3Img);
        car3.setLifetime=170;
        car3.add(player3);
}

//create reset function here
function reset(){

gameState = PLAY;
gameOver.visible=false;
car1.addAnimation("collide",car1_collide);

car2.destroyEach();

distance=0;

}