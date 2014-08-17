Function.prototype.inherits = function(superclass) {
  function Surrogate () {};
  Surrogate.prototype = superclass.prototype;
  this.prototype = new Surrogate();
}

var randomVec = function (length) {
  function randomNumber () {
    var num = Math.floor(length * Math.random());
    if (Math.round(Math.random())) {
      return -1 * num;
    } else {
      return num;
    };
  }
  var vec = [randomNumber(), randomNumber()]

  if (vec[0] === 0 && vec[1] === 0) {
    vec = [0, 1];
  }

  return vec;
}

var computeDistance = function (pos1, pos2){
  var xDistSquared = Math.pow(Math.abs(pos1[0] - pos2[0]), 2)
  var yDistSquared = Math.pow(Math.abs(pos1[1] - pos2[1]), 2)
  return Math.sqrt(xDistSquared + yDistSquared)
}

var unitVector = function (vec) {
  var divisor = Math.sqrt(Math.pow(vec[0], 2) + Math.pow(vec[1], 2))
  var x = vec[0]/divisor
  var y = vec[1]/divisor
  return [x,y]
}