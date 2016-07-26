'use strict';
module.exports = class Palindromes {
  constructor(opts) {
    this.maxFactor = opts.maxFactor || 1000;
    this.minFactor = opts.minFactor || 0;
    this.palindromes = {};
  }

  static isPalindrome(n) {
    n = String(n);
    return n === n.split('').reverse().join('');
  }

  generate() {
    for (let x = this.minFactor; x < this.maxFactor + 1; x++) {
      for (let y = x; y < this.maxFactor + 1; y++) {
        let z = x * y;
        if (Palindromes.isPalindrome(z)) {
          if (!(z in this.palindromes)) {
            this.palindromes[z] = {value: z, factors: []};
          }
          this.palindromes[z].factors.push([x, y]);
        }
      }
    }
  }

  largest() {
    let values = Object.keys(this.palindromes)
      .sort((a, b) => Number(a) - Number(b));
    return this.palindromes[values[values.length - 1]];
  }

  smallest() {
    let values = Object.keys(this.palindromes)
      .sort((a, b) => Number(a) - Number(b));
    return this.palindromes[values[0]];
  }
};
