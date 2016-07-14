var Triangle = function(a, b, c) {
  this.sides = [a, b, c];
};

Triangle.prototype.kind = function() {
  var a = this.sides[0];
  var b = this.sides[1];
  var c = this.sides[2];

  if (this.sides.some(x => x <= 0 || x >= (a + b + c) / 2))
    throw new Error('Has invalid sides.');
  if (a === b && b === c)
    return 'equilateral';
  if (a === b || b === c || a === c)
    return 'isosceles';
  return 'scalene';
};

module.exports = Triangle;
