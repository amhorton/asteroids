if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
}

var Bullet = Asteroids.Bullet = function (game) {
  this.ship = game.ship

  var posX = this.ship.pos[0]
  var posY = this.ship.pos[1]

  shipUnitVec = unitVector(this.ship.vel)
  bulletSpeed = 20


  var velX = shipUnitVec[0] * bulletSpeed
  var velY = shipUnitVec[1] * bulletSpeed

  var pos
  MovingObject.call(
    this,
    [posX,posY],
    [velX,velY],
    4,
    "#f44d0b",
    game)

    this.game.shipAndBullets.push(this)
}

Bullet.inherits(MovingObject)