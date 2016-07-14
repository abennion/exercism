var Year = function(year) {
  this.year = year;
};

Year.prototype.isLeap = function() {
  if (isNaN(this.year)) {
    return false;
  }

  if (this.year % 4 === 0) {
    if (this.year % 400 === 0) {
      return true;
    }

    if (this.year % 100 === 0) {
      return false;
    }

    return true;
  }

  return false;
};

module.exports = Year;
