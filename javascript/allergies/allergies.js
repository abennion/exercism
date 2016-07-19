const m = {
  eggs: 1,
  peanuts: 2,
  shellfish: 4,
  strawberries: 8,
  tomatoes: 16,
  chocolate: 32,
  pollen: 64,
  cats: 128
};

module.exports = function(n) {
  return {
    list: () => Object.keys(m).filter(k => n & m[k]),
    allergicTo: k => (n & m[k.toLowerCase()]) !== 0
  };
};
