if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
}

DIM_X = window.innerWidth;
DIM_Y = window.innerHeight;
NUM_ASTEROIDS = 20;

var Game = Asteroids.Game = function() {
  this.x = DIM_X;
  this.y = DIM_Y;
  this.numAsteroids = NUM_ASTEROIDS;
  this.asteroids = [];
  this.bullets = []
  this.allObjects = []

  this.addAsteroids();
  this.ship = new Ship (this)
  this.allObjects = this.allObjects.concat(this.asteroids)

  this.allObjects.push(this.ship)
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
  this.allObjects.forEach(function(obj) {
    obj.draw(ctx);
  });
};

Game.prototype.moveObjects = function() {
  for(i = 0; i < this.allObjects.length; i++) {
    this.allObjects[i].move();
  }
  this.checkCollisions();
};

Game.prototype.step = function () {
  this.moveObjects();
  this.ship.slowDown.bind(this.ship)()
  this.draw(ctx);
};



Game.prototype.bounce = function(movObj) {
  if (movObj.pos[0] > this.x - 20 || movObj.pos[0] < 20) {
    movObj.changeDirection("x");
  } else if (movObj.pos[1] > this.y - 20 || movObj.pos[1] < 20) {
    movObj.changeDirection("y");
  };
};

Game.prototype.checkShipAsteroidCollisions = function () {
  for(i = 0; i < this.asteroids.length; i++) {
    if(this.asteroids[i].isCollidedWith(this.ship)) {;
      this.ship.relocate.bind(this.ship)();
    };
  };
};

Game.prototype.checkCollisions = function() {
  this.checkShipAsteroidCollisions();
};
