var Words = function() {};

Words.prototype.count = function(s) {
  var words = s.toLowerCase().match(/\S+/gi);

  return words.reduce(function(prevVal, value, index) {
    if (!(value in prevVal)) {
      prevVal[value] = 1;
    }
    else {
      prevVal[value]++;
    }
    return prevVal;
  }, { constructor: 0 });
};

module.exports = Words;
