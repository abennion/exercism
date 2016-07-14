var Isogram = function(word) {
  this.word = word;
};

Isogram.prototype.isIsogram = function() {
  var dups = this.word.replace(/[^a-zA-Z]/g, '').toLowerCase().split('').filter(function(elem, index, array) {
    return array.indexOf(elem) != index;
  });

  return dups.length === 0;
};

module.exports = Isogram;
