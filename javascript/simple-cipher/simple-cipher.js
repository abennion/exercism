'use strict';
module.exports = class {
  constructor(key = this.generateKey()) {
    this.key = key;
  }

  generateKey(size = 100) {
    let key = '';
    while (key.length < size)
      key += String.fromCharCode((Math.random() * 26 | 0) + 97);
    return key;
  }

  get key() {
    return this.k;
  }

  set key(key) {
    if (/([^a-z]|^$)/.test(key))
      throw new Error('Bad key');
    this.k = key;
  }

  encode(s) {
    return s.replace(/./g, (v, i) => {
      let o = v.charCodeAt(0) + (this.key[i].charCodeAt(0) - 97);
      if (o > 122)
        o -= 26;
      return String.fromCharCode(o);
    });
  }

  decode(s) {
    return s.replace(/./g, (v, i) => {
      let o = v.charCodeAt(0) - (this.key[i].charCodeAt(0) - 97);
      if (o < 97)
        o += 26;
      return String.fromCharCode(o);
    });
  }
};
