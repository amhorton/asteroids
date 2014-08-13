if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
}

var Asteroid = Asteroids.Asteroid = function (pos, game) {
  MovingObject.call(
    this,
    pos,
    randomVec(10),
    Asteroids.Asteroid.RADIUS,
    Asteroids.Asteroid.COLOR, game)
}

Asteroids.Asteroid.RADIUS = 30
Asteroids.Asteroid.COLOR = "#000000"

Asteroid.inherits(MovingObject)