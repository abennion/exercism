/*

  it('recognizes zero', function () {
    expect(ocr.convert(
      ' _ \n' +
      '| |\n' +
      '|_|\n' +
      '   '
    )).toBe('0');
  });

  xit('recognizes one', function () {
    expect(ocr.convert(
      '   \n' +
      '  |\n' +
      '  |\n' +
      '   '
    )).toBe('1');
  });
*/
'use strict';
/*const m = {
  0: ' _ \n| |\n|_|\n   ',
  1: '   \n  |\n  |\n   ',
  2: ' _ \n _|\n|_ \n   ',
  3: ' _ \n _|\n _|\n   ',
  4: '   \n|_|\n  |\n   ',
  5: ' _ \n|_ \n _|\n   ',
  6: ' _ \n|_ \n|_|\n   ',
  7: ' _ \n  |\n  |\n   ',
  8: ' _ \n| |\n|_|\n   ',
  9: ' _ \n|_|\n  |\n   '
}*/

const m = {
  '-93577388': '0',
  '1953016154': '1',
  '-1858189763': '2',
  '-1819185859': '3',
  '346799447': '4',
  '-852900291': '5',
  '-806940263': '6',
  '167593851': '7',
  '410973685': '8',
  '365013657': '9'
}

module.exports = class {
  static hashCode(str) {
    let hash = 0;
    if (str.length === 0)
      return hash;
    for (let i = 0; i < str.length; i++) {
        var ord = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + ord;
        hash = hash & hash;
    }
    return hash;
  }

/*
  it('identifies garble mixed in', function () {
    expect(ocr.convert(
      '       _     _           _ \n' +
      '  |  || |  || |     || || |\n' +
      '  |  | _|  ||_|  |  ||_||_|\n' +
      '                           '
    )).toBe('11?10?1?0');
  });
*/

  static convert(s) {
    // if has empty string of length greater than 2
    // use that as a delimiter, and to determine length of chunk
    let match = s.match(/[\ ]{4,}/);
    if (match)
      s = s.split(match[0]);
    


    let s.length / 4 | 0;
    let rows = s.match(new RegExp('' + ));


    return 'testing';

    let k = this.hashCode(s).toString();
    console.log('k: ' + k);
    if (k in m)
      return m[k];
    return '?';
  }
};
