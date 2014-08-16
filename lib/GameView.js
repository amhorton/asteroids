if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
}

var GameView = Asteroids.GameView = function () {
  this.game = new Game()
  this.drawing = ctx
}

GameView.prototype.start = function () {
  window.setInterval(this.game.step.bind(this.game), 40)
}