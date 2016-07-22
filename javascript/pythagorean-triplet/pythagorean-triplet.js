'use strict';
module.exports = class {
  constructor(...factors) {
    [this.a, this.b, this.c] = [...factors];
  }

  static where({minFactor = 3, maxFactor, sum}) {
    let triplets = [];
    for (let a = minFactor; a <= maxFactor; a++) {
      for (let b = a + 1; b <= maxFactor; b++) {
        for (let c = b + 1; c <= maxFactor; c++) {
          let t = new this(a, b, c);
          if (!t.isPythagorean())
            continue;
          if (sum !== undefined && t.sum() !== sum)
            continue;
          triplets.push(t);
        }
      }
    }
    return triplets;
  }

  sum() {
    return this.a + this.b + this.c;
  }

  product() {
    return this.a * this.b * this.c;
  }

  isPythagorean() {
    return this.a * this.a + this.b * this.b === this.c * this.c;
  }
};
