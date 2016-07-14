var Pangram = function(text) {
  this.text = text;
};

Pangram.prototype.isPangram = function() {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var chars = this.text.toLowerCase().split('');

  var missing = alphabet.filter(function(elem, i, array) {
    return chars.indexOf(elem) < 0;
  }, chars);
  
  return missing.length === 0;
};

module.exports = Pangram;
