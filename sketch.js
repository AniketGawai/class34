const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,rope ;
var box2,box3,box4,box5, box6,box7,box8,box9,box10;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;


    ball = new Ball(100,100,100,100)
    rope = new Rope(ball.body,{x:500,y:10});

    box1 = new Box(900,550,100,100);
    box2 = new Box(900,500,100,100);
    box3 = new Box(900,450,100,100)
    box4= new Box(900,400,100,100)
    box5 = new Box(900,350,100,100)

    box6 = new Box(800,550,100,100);
    box7= new Box(800,500,100,100);
    box8 = new Box(800,450,100,100)
    box9= new Box(800,400,100,100)
    box10 = new Box(800,350,100,100)


    ground = new Ground(600,580,1200,20);
    
   
   // getBackground();

    //log6 = new Log(230,180,80, PI/2);
   // rope= new rope(.body,{x:250, y:50});
}

function draw(){
    background("orange")

    Engine.update(engine);
    ground.display();
    box1.display();
    box2.display();
   box3.display();
   box4.display();
   box5.display();
   box6.display(); 
   box7.display();
   box8.display();
   box9.display();
   box10.display();


   ball.display();
   rope.display();

  
}

function mouseDragged(){
   // if(gameState != "launch" ){
   
    //}
}

