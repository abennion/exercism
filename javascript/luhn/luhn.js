'use strict';
module.exports = class Luhn {
  constructor(n) {
    this.checkDigit = n % 10;

    this.addends = [...String(n)].reverse().map((v, i) => {
      let x = (i % 2 + 1) * v;
      return (x > 9) ? x - 9 : x;
    }).reverse();

    this.checksum = this.addends.reduce((r, v) => r + v, 0);

    this.valid = this.checksum % 10 === 0;
  }

  static create(n) {
    let luhn = new Luhn(n * 10);
    return parseInt(String(n) + ((luhn.checksum * 9) % 10), 10);
  }
};
