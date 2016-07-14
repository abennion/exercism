var BigInt = require('./big-integer');

var Grains = function() {};

Grains.prototype.square = function(number) {
  return (new BigInt(2)).pow(number - 1).toString();
};

Grains.prototype.total = function() {
  var total = new BigInt(0);
  for (var i = 0; i < 64; i++)
    total = total.add(new BigInt(this.square(i + 1)));
  return total.toString();
};

module.exports = Grains;
