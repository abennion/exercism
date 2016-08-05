'use strict';
// from @ebiven
const pairs = {
  '{': '}',
  '[': ']',
  '(': ')'
};

module.exports = function(brackets) {
  let stack = [];
  [...String(brackets)].forEach(bracket => {
    if (bracket in pairs) {
      stack.push(bracket);
    } else if (pairs[stack[stack.length - 1]] === bracket) {
      stack.pop();
    } else {
      stack.push(false);
    }
  });
  return stack.length === 0;
};
