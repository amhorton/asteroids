if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
}

DIM_X = window.innerWidth;
DIM_Y = window.innerHeight;
NUM_ASTEROIDS = 10;

var Game = Asteroids.Game = function() {
  this.x = DIM_X;
  this.y = DIM_Y;
  this.numAsteroids = NUM_ASTEROIDS;
  this.asteroids = [];

  this.addAsteroids();
};

Game.prototype.addAsteroids = function() {
  for(i = 0; i < this.numAsteroids; i ++ ) {
    var x = Math.floor(Math.random() * (this.x - 60) + 30);
    var y = Math.floor(Math.random() * (this.y - 60) + 30);

    this.asteroids.push(new Asteroid([x,y], this));
  };
};

Game.prototype.draw = function(ctx) {
  ctx.clearRect(0, 0, this.x, this.y);
  this.asteroids.forEach(function(asteroid) {
    asteroid.draw(ctx);
  });
};

Game.prototype.moveObjects = function() {
  for(i = 0; i < this.asteroids.length; i++) {
    this.asteroids[i].move();
  }
  this.checkCollisions();
};

Game.prototype.step = function () {
  this.moveObjects();
  this.draw(ctx);
};

Game.prototype.bounce = function(movObj) {
  if (movObj.pos[0] > this.x - 30 || movObj.pos[0] < 30) {
    movObj.changeDirection("x");
  } else if (movObj.pos[1] > this.y - 30 || movObj.pos[1] < 30) {
    movObj.changeDirection("y");
  };
};

Game.prototype.checkCollisions = function() {
  for(i = 0; i < this.asteroids.length - 1; i++) {
    for(j = i + 1; j < this.asteroids.length; j++)
    if(this.asteroids[i].isCollidedWith(this.asteroids[j])) {
      var dirToChange = this.asteroids[i].isCollidedWith(this.asteroids[j])
      this.asteroids[i].changeDirection(dirToChange);
      this.asteroids[j].changeDirection(dirToChange);
    }
  }
}