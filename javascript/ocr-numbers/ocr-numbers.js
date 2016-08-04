'use strict';
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
};

module.exports = class {
  static hashCode(str) {
    let hash = 0;
    if (str.length === 0)
      return hash;
    for (let i = 0; i < str.length; i++) {
      var ord = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + ord;
      hash &= hash;
    }
    return hash;
  }

  static parseNumber(s) {
    let k = this.hashCode(s).toString();
    if (k in m)
      return m[k];
    return '?';
  }

  static convert(s) {
    let rows = s.split('\n').map(e => e.split(''));
    let res = '';
    while (rows.length > 0) {
      let num = ['', '', '', ''];
      for (let r = 0; r < 4; r++) {
        for (let c = 0; c < 3; c++) {
          num[r] += rows[r].shift();
        }
      }
      num = num.join('\n');
      res += this.parseNumber(num);
      if (rows[0].length === 0) {
        rows = rows.slice(4);
        if (rows.length > 0)
          res += ',';
      }
    }
    return res;
  }
};
