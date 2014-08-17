if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
}

var GameView = Asteroids.GameView = function () {
  this.game = new Game()
  this.drawing = ctx
}

GameView.prototype.start = function () {
  key('up', this.game.ship.changeVel.bind(this.game.ship, [0,-3]));
  key('down', this.game.ship.changeVel.bind(this.game.ship, [0,1]));
  key('right', this.game.ship.changeVel.bind(this.game.ship, [3,0]));
  key('left', this.game.ship.changeVel.bind(this.game.ship, [-3,0]));
  key('space', this.game.ship.shoot.bind(this.game.ship));
  window.setInterval(this.game.step.bind(this.game), 40);
}