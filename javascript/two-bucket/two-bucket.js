'use strict';
module.exports = class TwoBucket {
  constructor(buckOne, buckTwo, goal, starterBuck) {
    let names = ['one', 'two'];
    let size = [buckOne, buckTwo];
    if (starterBuck === 'two') {
      names = names.reverse();
      size = size.reverse();
    }
    let b = [0, 0];
    let moves = 0;

    while (b[0] !== goal && b[1] !== goal) {
      moves += 1;
      if (b[1] === size[1]) {
        b[1] = 0;
      } else if (b[0] > 0) {
        let space = size[1] - b[1];
        let pour = (b[0] > space) ? space : b[0];
        b[1] += pour;
        b[0] -= pour;
      } else {
        b[0] = size[0];
      }
    }

    this.goalBucket = names[Number(b[0] !== goal)];
    this.otherBucket = b[Number(b[0] === goal)];
    this.moves = () => moves;
  }
};
