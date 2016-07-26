'use strict';
module.exports = class {
  static nth(n) {
    if (n < 1)
      throw new Error('Prime is not possible');
    let primes = [2, 3, 5];
    let i = primes[primes.length - 1] + 1;
    while (primes.length < n) {
      let isPrime = true;
      for (let j = 0; j < primes.length; j++) {
        if (i % primes[j] === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime)
        primes.push(i);
      i += 1;
    }
    return primes[n - 1];
  }
};
