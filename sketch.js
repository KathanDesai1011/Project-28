
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint; 

function preload(){

	boy1 = loadImage("boy.png");
	tree = loadImage("tree.png");
	
}

function setup() {
	var canvas = createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,675,800,10);
	stone = new Stone(115,515,50);

	mango1 = new Mango(620,330,25);
	mango2 = new Mango(600,425,25)
	mango3 = new Mango(700,350,25)
	mango4 = new Mango(550,410,25)
	mango5 = new Mango(750,400,25)
	mango6 = new Mango(650,375,25)
	mango7 = new Mango(700,430,25)

	rope = new Rope(stone.body,{x:115, y:515});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  ground.display();
  rope.display();

  image(boy1,80,440,200,300);
  image(tree,500,275,300,400)
  stone.display();

  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
  detectCollision(stone, mango6);
  detectCollision(stone, mango7);

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();

   
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY})
}

function mouseReleased(){
	rope.fly();
}

function detectCollision(object1,object2){
	object1BodyPosition = object1.body.position
	object2BodyPosition = object2.body.position
	
  
	var distance = dist(object1BodyPosition.x, object1BodyPosition.y, object2BodyPosition.x, object2BodyPosition.y);
	if(distance <= object1.r + object2.r){
	  Matter.Body.setStatic(object2.body, false);
	}
  
}
 
function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:100,y:465});
		rope.attach(stone.body);
	}
}


