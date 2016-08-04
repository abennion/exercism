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

  static parseNumber(s) {
    console.log('parseNumber(' + s + ')...');
    let k = this.hashCode(s).toString();
    if (k in m)
      return m[k];
    return '?';
  }

/*
  let s = '    _  _ \n' +
      '  | _| _|\n' +
      '  ||_  _|\n' +
      '         \n' +
      '    _  _ \n' +
      '|_||_ |_ \n' +
      '  | _||_|\n' +
      '         \n' +
      ' _  _  _ \n' +
      '  ||_||_|\n' +
      '  ||_| _|\n' +
      '         ';
*/

  static convert(s) {
    let m = s.match(/[\ ]{4,}/g);
    if (m) {
      m = m.sort((a, b) => b.length - a.length);
      s = s.split(m[0]).filter(e => /[\|_]/.test(e));;
    }
    let parts = [].concat(s);
    //console.log('parts: ' + parts);

    let res = parts.reduce((retVal, nums, i) => {
      console.log('nums: `' + nums + '`');
      nums = nums.split('\n').filter(e => /[\|_]/.test(e)).map(e => e.match(/.{1,3}/g));
      console.log('nums[0]: `' + nums[0] + '`');
      console.log('nums: `' + nums + '`');
      console.log('nums.length: ' + nums.length);
      if (nums.length > 1) {
        // still a leading \n after the split!!!
        // transpose
        nums = nums[0].map((num, i) => {
          // ' _ ', ' _ ', ' _ '
          return num.split('').map((col, j) => {
            return nums[i][j];
          }).join('');
        }).join('\n') + '\n';
      }
      console.log('nums(2): `' + nums + '`');
      return;

      nums = [].concat(nums);
      // parse nums 
      nums.map(num => {
        let k = this.hashCode(num).toString();
        console.log('num: ' + num);
        if (k in m)
          return m[k];
        return '?';
      });
    }, '');

    console.log('res: ' + res);
    return res;
  }
};
