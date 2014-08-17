if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
}

var Asteroid = Asteroids.Asteroid = function (rad, pos, game) {
  MovingObject.call(
    this,
    pos,
    randomVec(10),
    rad,
    Asteroids.Asteroid.COLOR, game)
}

Asteroids.Asteroid.COLOR = "#379ac8"

Asteroid.inherits(MovingObject)