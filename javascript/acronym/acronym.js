exports.parse = long => long[0] + long.match(/[ -]\w|[a-z][A-Z]/g).map(x => x[1]).join('').toUpperCase();

/*
module.exports = class Acronyms {
  static parse(s) {
    let matches = s.match(/^([A-Z]*)(\:)/);
    if (matches)
      return matches[1];
    return s.split(/\ |\-|(?=[A-Z])/).reduce((a, b) => a + b.slice(0, 1), '').toUpperCase();
  }
}
*/
