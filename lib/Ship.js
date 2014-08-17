if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
}

var Ship = Asteroids.Ship = function (game) {
  MovingObject.call(
    this,
    [400,400],
    [0,0],
    20,
    "#b1c3b6",
    game);

}

Ship.inherits(MovingObject)

Ship.prototype.relocate = function () {
  var x = Math.floor(Math.random() * (this.game.x - 60) + 30);
  var y = Math.floor(Math.random() * (this.game.y - 60) + 30);
  this.pos = [x,y];
  console.log(this.pos);
  this.vel = [0,0];
}

Ship.prototype.changeVel = function(vec) {
  this.vel[0] = this.vel[0] + vec[0];
  this.vel[1] = this.vel[1] + vec[1];
};

Ship.prototype.slowDown = function() {
  this.vel[1] = this.vel[1] * .97;
  this.vel[0] = this.vel[0] * .97;
};

Ship.prototype.shoot = function() {
  if (this.vel[0] === 0 && this.vel[1] === 0) {
    return false;
  };
  if (this.game.bullets.length >= 5) {
    return false;
  };

  new Bullet(this.game);
}