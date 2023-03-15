let obstacles;
let ceilingObstacles;
let randint;
let lost;
let next;


function setup() {
  createCanvas(600, 400);
  resetSketch()
  background('#222222');
}

function keyPressed() {
  if (key == ' ') {
    player.jump();
    if (lost) {
      resetSketch();
    }
  }
}

function resetSketch() {
  console.log("Game starting")
  lost = false;
  obstacles = []
  ceilingObstacles = []
  otherCeilings = []
  next = 0;
  player = new Player();
  new Obstacle();
  new ceilingObstacle();
  randint = int(random(35, width/5));
  loop();
}

function draw() {
  background('#222222');
  next += 1
  if (next == randint) {
    obstacles.push(new Obstacle())
    ceilingObstacles.push(new ceilingObstacle())
    next = 0
    randint = int(random(35, width/5))
  }
  for (let o of obstacles) {
    if (o.x < 0) {
      if (obstacles.length > 4) {
        obstacles.shift()
      }
    }
    o.move();
    o.show();
    if (player.hits(o)) {
      console.log("Game Over!")
      lost = true;
      noLoop();
    }
  }
  
    for (let c of ceilingObstacles) {
    if (c.x < 0) {
      if (ceilingObstacles.length > 4) {
        ceilingObstacles.shift()
      }
    }
    c.move();
    c.show();
    if (player.hits(c)) {
      console.log("Game Over!")
      lost = true;
      noLoop();
    }
  }

  player.show();
  player.move();
}