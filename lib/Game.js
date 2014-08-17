if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
}

DIM_X = window.innerWidth;
DIM_Y = window.innerHeight;
NUM_ASTEROIDS = 5;

var Game = Asteroids.Game = function() {
  this.x = DIM_X;
  this.y = DIM_Y;
  this.numAsteroids = NUM_ASTEROIDS;
  this.asteroids = [];
  this.ship = new Ship (this)
  this.shipAndBullets = [this.ship]
  this.addAsteroids();
  
  this.objectArrays = [this.asteroids, this.shipAndBullets]
};

Game.prototype.addAsteroids = function() {
  for(i = 0; i < this.numAsteroids; i ++ ) {
    var x = Math.floor(Math.random() * (this.x - 60) + 30);
    var y = Math.floor(Math.random() * (this.y - 60) + 30);

    this.asteroids.push(new Asteroid(30, [x,y], this));
  };
};

Game.prototype.draw = function(ctx) {
  ctx.clearRect(0, 0, this.x, this.y);
  this.objectArrays.forEach(function(arr) {
    arr.forEach(function(obj) {
      obj.draw(ctx);
    });
  });
};

Game.prototype.moveObjects = function() {
  this.objectArrays.forEach(function(arr) {
    arr.forEach(function(obj) {
      obj.move()
    });
  });

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

Game.prototype.checkBulletAsteroidCollisions = function () {
  var bulletLen = this.shipAndBullets.length
  var asteroidLen = this.asteroids.length
  for (i = 1; i < bulletLen; i++) {
    for (j = 0; j < asteroidLen; j++) {
      if (this.shipAndBullets[i].isCollidedWith(this.asteroids[j])) {
        var thisAsteroid = this.asteroids[j]
        if (thisAsteroid.radius > 15) {
          var x = thisAsteroid.pos[0];
          var y = thisAsteroid.pos[1];

          for (i = 0; i < 4; i++) {
            this.asteroids.push(new Asteroid(15, [x,y], this))
          };
        }
            
        this.asteroids.splice(j, 1);
        this.shipAndBullets.splice(i, 1);

      };
    };
  };
};

Game.prototype.checkCollisions = function() {
  this.checkShipAsteroidCollisions();
  this.checkBulletAsteroidCollisions();
};
