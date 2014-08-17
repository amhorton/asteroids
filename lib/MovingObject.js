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
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.globalAlpha = .7;
  ctx.strokeStyle = "black"

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
  if (computeDistance(this.pos, otherObject.pos) <= this.radius + otherObject.radius) {
    return true
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







