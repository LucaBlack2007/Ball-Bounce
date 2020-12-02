const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object, ball;

function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;

  var object_options = {
    isStatic: true
  }
  var ball_options = {
    restitution: 1.0
  }

  ball = Bodies.circle(400, 200, 50, ball_options);
  object = Bodies.rectangle(400, 400, 500, 50, object_options);

  World.add(world, object);
  World.add(world, ball);
}

function draw() {
  background(0); 
  
  Engine.update(engine);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);

  ellipse(ball.position.x, ball.position.y, 50, 50);
  rect(object.position.x, object.position.y,800,20);
}