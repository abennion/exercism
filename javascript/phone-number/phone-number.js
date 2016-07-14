var PhoneNumber = function(text) {
  this.text = text;
};

PhoneNumber.prototype.number = function() {
  var digits = this.text.replace(/[^0-9]/g, '');

  switch (digits.length) {
    case 10:
      return digits;
    case 11:
      if (digits.slice(0, 1) === 1) {
        return digits.slice(1);
      }
      break;
    default:
      break;
  }

  return '0000000000';
};

PhoneNumber.prototype.areaCode = function() {
  return this.number().slice(0, 3);
};

PhoneNumber.prototype.toString = function() {
  var digits = this.number();
  return '(' + digits.slice(0, 3) +
    ') ' + digits.slice(3, 6) +
    '-' + digits.slice(6, 10);
};

module.exports = PhoneNumber;
