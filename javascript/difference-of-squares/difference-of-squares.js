'use script';
module.exports = class {
  constructor(n) {
    this.n = n;
  }

  get squareOfSums() {
    let sum = 0;
    for (let i = 1; i < this.n + 1; i++)
      sum += i;
    return sum * sum;
  }

  get sumOfSquares() {
    let sum = 0;
    for (let i = 1; i < this.n + 1; i++)
      sum += i * i;
    return sum;
  }

  get difference() {
    return this.squareOfSums - this.sumOfSquares;
  }
};
