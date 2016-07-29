/*
r = require('./ocr-numbers');

describe('ocr', function () {

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
module.exports = class() {
  get convert(s) {
    return '';
  }
};

