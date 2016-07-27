/*
var say = require('./say');

describe('say', function () {

  it('zero', function () {
    expect(say.inEnglish(0)).toBe('zero');
  });

  xit('one', function () {
    expect(say.inEnglish(1)).toBe('one');
  });
*/
'use strict';
const m = {
  0: 'zero',
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
  1000000: 'million'
};

exports.inEnglish = n => {
  return [...String(n)].reverse().reduce((r, e, i, a) => {
    let s = '';
    switch (i) {
      case 0:
        return m[e];
        break;
      case 1:
        if (Number(e) < 2)
          return m[Number(e + a[i - 1])];
        else { 
          let s = m[Number(e) * Math.pow(10, i)];
          if (r !== 'zero')
            s += '-' + r;
          return s;
        }
        break;
      case 2:
        if (Number(e) > 0)
          s = m[e] + ' hundred';
        if (r !== 'zero')
          s += ' ' + r;
        return s;
        break;
      case 3:
        s = m[e] + ' thousand';
        if (r !== 'zero' && r !== '')
          s += ' ' + r;
        return s;
        break;
      case 6:
        s = m[e] + ' million';
        if (r !== undefined && r !== 'zero' && r !== '')
          s += ' ' + r;
        return s;
      default:
        break;
    }
  }, '');
};
