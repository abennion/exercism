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
const m = {
  0: ' _ \n| |\n|_|\n   '
}

module.exports = class {
  static convert(s) {
    Object.keys(m).forEach(e => {
      console.log('s: `' + s + '`, m[e]: `' + m[e] + '`')
      if (m[e] === s)
        return e;
    });
    return false;
  } 
};
