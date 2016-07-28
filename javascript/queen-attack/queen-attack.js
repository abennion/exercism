'use strict';
const board = [
  ['_', '_', '_', '_', '_', '_', '_', '_'],
  ['_', '_', '_', '_', '_', '_', '_', '_'],
  ['_', '_', '_', '_', '_', '_', '_', '_'],
  ['_', '_', '_', '_', '_', '_', '_', '_'],
  ['_', '_', '_', '_', '_', '_', '_', '_'],
  ['_', '_', '_', '_', '_', '_', '_', '_'],
  ['_', '_', '_', '_', '_', '_', '_', '_'],
  ['_', '_', '_', '_', '_', '_', '_', '_']
];

module.exports = class Queens {
  constructor(opts = {white: [0, 3], black: [7, 3]}) {
    if (String(opts.white) === String(opts.black)) {
      /*eslint no-throw-literal: "error"*/
      throw 'Queens cannot share the same space';
    }
    this.white = opts.white;
    this.black = opts.black;
  }

  toString() {
    let b = board.slice(0);
    b[this.white[0]][this.white[1]] = 'W';
    b[this.black[0]][this.black[1]] = 'B';
    return b.map(e => e.join(' ')).join('\n') + '\n';
  }

  canAttack() {
    return (this.white[0] === this.black[0] ||
      this.white[1] === this.black[1] ||
      Math.abs(this.white[0] - this.black[0]) ===
        Math.abs(this.white[1] - this.black[1]));
  }
};
