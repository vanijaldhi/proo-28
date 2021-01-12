
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint =  Matter.Constraint;

var ground;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 ground = new Ground(800,650,1600,50);
	 tree = new Tree(1200,425,50,400);
	 stone = new Stone(325,520);
	 boy = new Boy(400,600);
	
	 mango1 = new Mango(1260,130);
	 mango2 = new Mango(1400,200);
	 mango3 = new Mango(1140,300);
	 mango4 = new Mango(1100,200);
	 mango5 = new Mango(1240,260);

	 sling1 = new Slingshot(stone.body,{x:400,y:600});

	Engine.run(engine);
  
}


function draw() {
  background(150,200,255);
 
  ground.display();
  tree.display();
  stone.display();
  boy.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  sling1.display();

  detectollision(rock,mango1);
  detectollision(rock,mango2);
  detectollision(rock,mango3);
  detectollision(rock,mango4);
  detectollision(rock,mango5);
  detectollision(rock,mango6);
  detectollision(rock,mango7);
 
}
function mouseDragged(){
    Matter.Body.setPosition (stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased (){
    rope.fly()
}
function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stone.body, {x:120, y:515}) 
	  sling1.attach(stone.body);
	}
  }
  function detectollision(lrock,lmango){
    mangoBodyPosition=lmango.body.position
    stoneBodyPosition=lrock.body.position
    
    var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
 
      if(distance<=lmango.r+lrock.r)
      {

        Matter.Body.setStatic(lmango.body,false);
      }
  
    }






