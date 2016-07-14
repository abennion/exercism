var Anagram = function(text) {
  this.text = text;
};

Anagram.prototype.matches = function() {
  var args = Array.prototype.slice.call(arguments);
  var words = args.reduce(function(prevVal, elem) {
    if (Array.isArray(elem) || (typeof elem === 'string')) {
      prevVal = prevVal.concat(elem);
    }
    return prevVal;
  }, []);
  var lowerCaseText = this.text.toLowerCase();
  var sortedText = lowerCaseText.split('').sort().join('');

  return words.filter(function(elem, i, array) {
    var lowerCaseElem = elem.toLowerCase();
    var sortedElem = lowerCaseElem.split('').sort().join('');
    return sortedElem === sortedText && lowerCaseElem !== lowerCaseText;
  }, sortedText, lowerCaseText);
};

module.exports = Anagram;
