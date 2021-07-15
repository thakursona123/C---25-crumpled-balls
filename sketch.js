
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,papeObject,groundObject,engine;	
var world;


function setup() {
	createCanvas(1200, 400);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	paperObject=new Paper(40,40,20);
	groundObject=new Ground(600,400);
	dustbinObject=new Dustbin(1000,400);
    //Create a Ground
	Engine.run(engine);
  //Render.run(Render)
}


function draw() {
  rectMode(CENTER);
  background(100);
 
 paperObject.display();
 dustbinObject.display();
  groundObject.display();




}
function KeyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.pos,{x:85,y:-85});
	}
}
