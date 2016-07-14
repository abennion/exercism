var BeerSong = function() {};

BeerSong.prototype.verse = function(bottles) {
  switch (bottles) {
    case 2:
      return '2 bottles of beer on the wall, 2 bottles of beer.\n' +
        'Take one down and pass it around, 1 bottle of beer on the wall.\n';
    case 1:
      return '1 bottle of beer on the wall, 1 bottle of beer.\n' +
        'Take it down and pass it around, no more bottles of beer' +
        ' on the wall.\n';
    case 0:
      return 'No more bottles of beer on the wall, no more bottles of beer.\n' +
        'Go to the store and buy some more, 99 bottles of beer on the wall.\n';
    default:
      return bottles + ' bottles of beer on the wall, ' + bottles +
        ' bottles of beer.\n' +
        'Take one down and pass it around, ' + (bottles - 1) +
        ' bottles of beer on the wall.\n';
  }
};

BeerSong.prototype.sing = function(fromBottle, toBottle) {
  var self = this;

  function singNextVerse(fromBottle, toBottle) {
    return fromBottle > toBottle;
  }

  function singVerse(fromBottle, toBottle) {
    toBottle = (toBottle === undefined) ? 0 : toBottle;
    var text = self.verse(fromBottle);
    if (singNextVerse(fromBottle, toBottle))
      return text + '\n' + singVerse(fromBottle - 1, toBottle);
    return text;
  }

  return singVerse(fromBottle, toBottle);
};

module.exports = BeerSong;
