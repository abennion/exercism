const numerals = {
  1: 'I', 4: 'IV', 5: 'V', 9: 'IX', 10: 'X', 40: 'XL', 50: 'L',
  90: 'XC', 100: 'C', 400: 'CD', 500: 'D', 900: 'CM', 1000: 'M'
};

module.exports = number => {
  return Object.keys(numerals).sort((a, b) => a - b)
  .reverse().reduce((prevVal, elem) => {
    let numeral = parseInt(elem, 10);
    let x = prevVal.number / numeral | 0;
    prevVal.number -= x * numeral;
    while (x--)
      prevVal.result += numerals[numeral];
    return prevVal;
  }, {result: '', number: number}).result;
};
