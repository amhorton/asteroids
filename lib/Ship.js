if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
}

var Ship = Asteroids.Ship = function (game) {
  MovingObject.call(
    this,
<<<<<<< HEAD
    [400,200],
=======
    [400,400],
>>>>>>> b7687d9903c3dee6d65cada595a182b4b4b682d7
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
  this.vel = [0,0];
  this.game.deaths ++
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
  if (this.game.shipAndBullets.length >= 11) {
    return false;
  };

  new Bullet(this.game);
}