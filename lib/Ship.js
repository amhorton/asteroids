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
    game)

}

Ship.inherits(MovingObject)

Ship.prototype.relocate = function () {
  var x = Math.floor(Math.random() * (this.game.x - 60) + 30);
  var y = Math.floor(Math.random() * (this.game.y - 60) + 30);
  this.pos = [x,y]
  console.log(this.pos)
  this.vel = [0,0]
}