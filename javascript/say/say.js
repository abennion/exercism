'use strict';
const m = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion'
};

exports.inEnglish = n => {
  if (n < 0 || n >= 1000000000000)
    throw new Error('Number must be between 0 and 999,999,999,999.');
  if (n === 0)
    return 'zero';
  let reversed = String(n).split('').reverse().join('');
  return reversed.match(/.{1,3}/g).reduce((r, e, i) => {
    let s = [...e].reduce((r, e, i, a) => {
      e = Number(e);
      if (e === 0)
        return r;
      if (r !== '')
        r = ' ' + r;

      switch (i) {
        case 0:
          r = m[e];
          break;
        case 1:
          if (e < 2)
            r = m[Number(e + a[i - 1])];
          else {
            r = r.trim();
            if (r !== '')
              r = '-' + r;
            r = m[e * Math.pow(10, i)] + r;
          }
          break;
        case 2:
          r = m[e] + ' hundred' + r;
          break;
        default:
      }

      return r;
    }, '');

    if (s !== '') {
      if (i === 0)
        r = s;
      else {
        if (r !== '')
          r = ' ' + r;
        r = s + ' ' + m[Math.pow(1000, i)] + r;
      }
    }

    return r;
  }, '');
};
