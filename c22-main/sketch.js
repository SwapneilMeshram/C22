const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var engine,world,ground;
var ball;

function setup() {
  var canvas= createCanvas(400,400);
  engine= Engine.create();
  world=engine.world;
  var options={
    isStatic : true
  }

  var ballOptions = {
    restitution : 1.0
  }

  ground=Bodies.rectangle(200,400,400,50,options);
  World.add(world,ground);

  ball=Bodies.circle(200, 200, 50, ballOptions);
  World.add(world,ball);
}

function draw() {
  background("black");  
  Engine.update(engine);
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,50);

  ellipseMode(RADIUS)
  ellipse(ball.position.x, ball.position.y, 50, 50);
}