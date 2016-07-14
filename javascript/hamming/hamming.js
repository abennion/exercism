var Hamming = function() {};

Hamming.prototype.compute = function(s1, s2) {
  if (s1.length !== s2.length) {
    throw new Error('DNA strands must be of equal length.');
  }

  return s1.split('').reduce(function(prevVal, elem, index) {
    return elem != s2.charAt(index) ? prevVal + 1 : prevVal;
  }, 0);
};

module.exports = Hamming;
