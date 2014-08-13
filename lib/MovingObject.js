if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
}

var MovingObject = Asteroids.MovingObject = function (pos, vel, radius, color, game) {
  this.pos = pos
  this.vel = vel
  this.radius = radius
  this.color = color
  this.game = game
}

MovingObject.prototype.draw = function (ctx) {
  ctx.fillStyle = this.color
  ctx.beginPath();

  ctx.arc(
    this.pos[0],
    this.pos[1],
    this.radius,
    0,
    2 * Math.PI,
    false
  );

  ctx.fill();
}

MovingObject.prototype.move = function() {
  this.pos[0] += this.vel[0];
  this.pos[1] += this.vel[1];
  this.game.bounce(this);
}


MovingObject.prototype.isCollidedWith = function(otherObject) {
  if (computeDistance(this.pos, otherObject.pos) <= 60) {
    var closeX = Math.abs(this.pos[0] - otherObject.pos[0]) <= (this.radius * 2)
    var closeY = Math.abs(this.pos[1] - otherObject.pos[1]) <= (this.radius * 2)

    if (closeX && closeY) {
      return "both";
    } else if (closeY) {
      return "y";
    } else if (closeX) {
      return "x"
    };
  } else {
    return false
  };
};

MovingObject.prototype.changeDirection = function(dir) {
  if (dir === "x") {
    this.vel[0] *= -1;
  } else if (dir === "y") {
    this.vel[1] *= -1;
  } else if (dir === "both") {
    this.vel[0] *= -1
    this.vel[1] *= -1
  };
}







