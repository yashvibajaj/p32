const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
const Constraint=Matter.Constraint;


var engine,world;

function preload(){

}

function setup(){
   //To create canvas
   createCanvas(1200,630);

   engine=Engine.create();  
   world=engine.world;

  ground1 = new Ground (600,450,1200,10)
  ground2 = new Ground (600,200,1200,10)
  ball = new Ball (1000,330,50,50)
  square1 = new Square (230,260,50,50)
  square6 = new Square (230,220,50,50)
  square2 = new Square (230,330,50,50)
  square3 = new Square (280,400,50,50)
  square4 = new Square (280,330,50,50)
  square5 = new Square (280,360,50,50)
 
 slingshot = new SlingShot(ball.body,{x:1000, y:325});

}

function draw(){

    Engine.update(engine);


    background(255);
    textSize(50)
    text ("WELCOME TO YASHVI BOWLING GAME",200,100)
   ground1.display();
   ground2.display();
   ball.display();
   square1.display();
   square2.display();
   square3.display();
   square4.display();
   square5.display();
   square6.display();
   slingshot.display();
}   
function mouseDragged(){

         Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    
 }
 
 
 function mouseReleased(){
     slingshot.fly();
 }
 
 function keyPressed(){
     if(keyCode === 32 && ball.body.speed<1){
         slingshot.attach(ball.body);
         Matter.Body.setPosition(ball.body,{x:1100,y:325})
         
     }

 
 }