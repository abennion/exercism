/** It's ugly, but a first pass. */
var FoodChain = function() {};

FoodChain.prototype.verse = function(number) {
  var know = 'I know an old lady who swallowed a ';

  var verses = {
    1: {
      what: know + 'fly.\n',
      why: 'I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n'
    },
    2: {
      what: know + 'spider.\n' +
        'It wriggled and jiggled and tickled inside her.\n',
      why: 'She swallowed the spider to catch the fly.\n'
    },
    3: {
      what: know + 'bird.\n' +
        'How absurd to swallow a bird!\n',
      why: 'She swallowed the bird to catch the spider' +
        ' that wriggled and jiggled and tickled inside her.\n'
    },
    4: {
      what: know + 'cat.\n' +
        'Imagine that, to swallow a cat!\n',
      why: 'She swallowed the cat to catch the bird.\n'
    },
    5: {
      what: know + 'dog.\n' +
        'What a hog, to swallow a dog!\n',
      why: 'She swallowed the dog to catch the cat.\n'
    },
    6: {
      what: know + 'goat.\n' +
        'Just opened her throat and swallowed a goat!\n',
      why: 'She swallowed the goat to catch the dog.\n'
    },
    7: {
      what: know + 'cow.\n' +
        'I don\'t know how she swallowed a cow!\n',
      why: 'She swallowed the cow to catch the goat.\n'
    },
    8: {
      what: know + 'horse.\n' +
        'She\'s dead, of course!\n',
      why: ''
    }
  };

  this.range = function(start, count) {
    return Array.apply(0, Array(count))
      .map(function(elem, i) {
        return i + start;
      }
    );
  };

  if (number === 8) {
    return verses[number].what;
  }

  return this.range(1, number).reverse().reduce(function(prevVal, elem) {
    var text = prevVal + verses[elem].why;
    if (elem === number) {
      text = verses[elem].what + text;
    }
    return text;
  }, '', verses, number);
};

FoodChain.prototype.verses = function(from, to) {
  var text = '';
  for (var i = from; i < to + 1; i++) {
    text += this.verse(i) + '\n';
  }
  return text;
};

module.exports = FoodChain;
