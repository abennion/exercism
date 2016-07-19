'use strict';
module.exports = function(s) {
  this.normalizePlaintext = () => s.toLowerCase().replace(/[^a-z0-9]/g, '');
  this.size = () => {
    let l = this.normalizePlaintext().length;
    let size = Math.sqrt(l) | 0;
    return (l - Math.pow(size, 2) > 0) ? size + 1 : size;
  };
  this.plaintextSegments = () => {
    let text = this.normalizePlaintext();
    return text.match(new RegExp('.{1,' + this.size() + '}', 'g'));
  };
  this.ciphertext = () => {
    let a = this.plaintextSegments();
    let transposed = [...a[0]].map((c, i) => a.map(r => r[i]));
    return transposed.map(x => x.join('')).join('');
  };
};
