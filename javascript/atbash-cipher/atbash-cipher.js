'use strict';
exports.encode = s => {
  return [...s.toLowerCase()].reduce((r, c) => {
    if ((r.length + 1) % 6 === 0)
      r += ' ';
    let o = c.charCodeAt(0);
    if (o >= 48 && o <= 57)
      r += c;
    if (o >= 97 && o <= 122)
      r += String.fromCharCode(122 - (o - 97));
    return r;
  }, '').trim();
};
