var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var lockedYFall = 0
var boxBases;
var boxLeftSprites;
var boxRightSprites;
var lockedY
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	
	createCanvas(800, 700);
	rectMode(CENTER);
	boxBases = createSprite(400,650,200,20);
	boxBases.shapeColor = "green"
	boxRightSprites = createSprite(500,600,20,80);
	boxRightSprites.shapeColor = "green"
	boxLeftSprites = createSprite(300,600,20,80);
	boxLeftSprites.shapeColor = "green"





	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

//	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
//	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

 	boxPosition=width/2-100
	 boxY=610;
	 
	packageBody = new Box(200,200,20,20);
	//packageBody = Bodies.rectangle(200,200,20,false);

 	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

	 boxrightSprite=createSprite(boxPosition, boxY, 20,100)
		boxrightSprite.shapeColor = "red"
 	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
	 World.add(world, boxLeftBody);
	 

 	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
 	boxBase.shapeColor=color(255,0,0);

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);


	Engine.run(engine);
	packageSprite.y = helicopterSprite.y;

	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
	packageSprite.collide(boxRightSprites);
	packageSprite.collide(boxBases);
	packageSprite.collide(boxLeftSprites);
  
	
  drawSprites();
	
  if(keyDown("left")){
	  helicopterSprite.x = helicopterSprite.x -5;
	  packageSprite.x = packageSprite.x -5;
  }
  if(keyDown("right")){
	  helicopterSprite.x = helicopterSprite.x + 5;
  	  packageSprite.x = packageSprite.x +5;
	  
  }
  if(lockedYFall == 0){
	if(keyDown("down")){
		lockedYFall = 1;
		packageSprite.velocityY = 5;
		packageSprite.y = lockedYFall;
		lockedY = packageSprite.x
	}
  }else{
	  packageSprite.x = lockedY;
  }
  Engine.update(engine);
  packageBody.display();
}

