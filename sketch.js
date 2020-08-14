
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

//var boyImage, boy
function preload()
{
	boyImage=loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	
	//Create the Bodies Here.

	tree1= new Tree(550,400,400,500);
	mango1= new Mango(600,230,20);
	mango2= new Mango(480,320,20);
	mango3= new Mango(550,300,20);
	mango4= new Mango(610,280,20);
	mango5= new Mango(650,260,20);
	stone= new Stone(150,480,20,40);
	slingshot= new SlingShot(stone.body,{x:150,y:480});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  drawSprites();
	tree1.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	stone.display();
	image(boyImage,200,550,200,300);
	slingshot.display();
	detectCollision(stone);
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    slingshot.fly()
}
function detectCollision(stone,Mango){
	mangoBodyPosition= mango.body.position;
	stoneBodyPosition= stone.body.position;

	var distnce=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=mango.r+stone.r){
		Matter.Body.setStatic(mango.body,false);
	}
}


