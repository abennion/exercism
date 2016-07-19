/*
```bash
# "102012"
    1       0       2       0       1       2    # the number
1*3^5 + 0*3^4 + 2*3^3 + 0*3^2 + 1*3^1 + 2*3^0    # the value
  243 +     0 +    54 +     0 +     3 +     2 =  302
```
*/

module.exports = function(s) {
  return {
    toDecimal: () => [...s].reverse().reduce((r, e, i) => r + (parseInt(e, 10) * Math.pow(3, i)), 0)
  }; 
};
