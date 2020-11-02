const Engine = Matter.Engine
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var divisionheight = 300;

function setup() {

  frameCount = 190;
  frameRate = 100;

  engine = Engine.create();
  world = engine.world;
  world.gravity.x = 0;
  world.gravity.y = 10;
  
  createCanvas(480,800);
  
  g = new Ground(240,800,480,50);

}

var particles=[]
var plinkos=[]
var divisions=[]

function draw() {

  background(72);

  Engine.update(engine);

  g.display();

  for (var a = 0; a <= width; a = a + 80) {
    divisions.push(new Division(a, height-divisionheight/2, 10, divisionheight));
  }
  
  for (var b = 0; b < divisions.length; b++) {
    divisions[b].display();
  }

  for (var c = 50; c < width; c = c + 50) {
    plinkos.push(new Plinko(c,50,10,10));
  }
  
  for (var d = 0; d < plinkos.length; d++) {
    plinkos[d].display();
  }
  
  for (var e = 25; e < width; e = e + 50) {
    plinkos.push(new Plinko(e,150,10,10));
  }

  for (var f = 0; f < plinkos.length; f++) {
    plinkos[f].display();
  }
  
  for (var z = 50; z < width; z = z + 50) {
    plinkos.push(new Plinko(z,250,10,10));
  }

  for (var h = 0; h < plinkos.length; h++) {
    plinkos[h].display();
  }
  
  for (var i = 25; i < width; i = i + 50) {
    plinkos.push(new Plinko(i,350,10,10));
  }

  for (var j = 0; j < plinkos.length; j++) {
    plinkos[j].display();
  }

  for (var k = 50; k < width; k = k + 50) {
    plinkos.push(new Plinko(k,450,10,10));
  }

  for (var l = 0; l < plinkos.length; l++) {
  plinkos[l].display();
  }

  for (var m = 50; m < width; m = m + 50) {
  plinkos.push(new Plinko(m,450,10,10));
  }

  for (var n = 0; n < plinkos.length; n++) {
    plinkos[n].display();
  }
  
  if (frameCount%60 === 0) {
    var particle = new Particle(random(80,400),0,20,20);
    particles.push(particle);
  }

  for (var i = 0; i < particles.length; i++) {
    particles[i].display();
  }
}