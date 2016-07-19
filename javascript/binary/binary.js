module.exports = function(text) {
  return {
    toDecimal: () => {
      let result = Array.from(text).reduce((sum, e, i, a) => {
        return sum + (parseInt(e, 2) * Math.pow(2, a.length - i - 1));
      }, 0);
      return (result) ? result : 0;
    }
  };
};
