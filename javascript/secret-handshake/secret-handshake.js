'use strict';
const m = {1: 'wink', 2: 'double blink', 4: 'close your eyes', 8: 'jump'};

module.exports = class {
  constructor(n) {
    if (/[^0-9]/.test(n))
      throw new Error('Handshake must be a number');
    this.n = n;
  }

  commands() {
    let keys = Object.keys(m);
    if (this.n & 16)
      keys = keys.reverse();
    return keys.filter(k => this.n & k).map(k => m[k]);
  }
};
