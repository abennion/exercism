var ETL = function() {};

ETL.prototype.transform = function(data) {
  return Object.keys(data).reduce(function(prevVal, score) {
    return data[score].reduce(function(prevVal, letter) {
      prevVal[letter.toLowerCase()] = parseInt(score);
      return prevVal;
    }, prevVal, score);
  }, {});
}

module.exports = ETL;
