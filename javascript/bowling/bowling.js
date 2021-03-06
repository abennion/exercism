'use strict';
module.exports = class Bowling {
  constructor(rolls) {
    this.rolls = rolls;
  }

  score() {
    if (this.rolls.length === 0)
      throw new Error('Score cannot be taken until the end of the game');
    if (this.rolls.filter(e => e > 10 || e < 0).length > 0)
      throw new Error('Pins must have a value from 0 to 10');

    let score = 0;
    let i = 0;

    for (let frame = 0; frame < 10; frame++) {
      if (this.rolls[i] === 10) {
        if (this.rolls[i + 2] === undefined || this.rolls[i + 1] === undefined)
          throw new Error('Score cannot be taken until the end of the game');
        score += this.rolls[i] + this.rolls[i + 1] + this.rolls[i + 2];
        i++;
      } else if (this.rolls[i] + this.rolls[i + 1] === 10) {
        score += 10 + this.rolls[i + 2];
        i += 2;
      } else {
        if (frame === 9) {
          if (this.rolls[i + 1] === undefined)
            throw new Error('Score cannot be taken until the end of the game');
          if (this.rolls[i + 2] !== undefined)
            throw new Error('Should not be able to roll after game is over');
        }
        if (this.rolls[i] + this.rolls[i + 1] > 10)
          throw new Error('Pin count exceeds pins on the lane');
        score += this.rolls[i] + this.rolls[i + 1];
        i += 2;
      }
    }

    return score;
  }
};
