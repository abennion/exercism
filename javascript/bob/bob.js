/*jslint esversion: 6 */
var Bob = function() {};

Bob.prototype.hey = function(input) {
  'use strict';

  var hasNonWhitespace = function(input) {
    return (/\S/).test(input);
  };

  var hasLowerCase = function(input) {
    return (/[a-z\u00e4\u00f6\u00fc]+/).test(input);
  };

  var hasUpperCase = function(input) {
    return (/[A-Z\u00c4\u00d6\u00dc\u00df]+/).test(input);
  };

  var isExclamation = function(input) {
    return (/\!\s*$/).test(input);
  };

  var isQuestion = function(input) {
    return (/\?\s*$/).test(input);
  };

  var hasNumber = function(input) {
    return (/[1-9]+/).test(input);
  };

  var isShouting = function(input) {
    return (isExclamation(input) && !hasLowerCase(input))
      || (isQuestion(input) && hasUpperCase(input) && !hasLowerCase(input))
      || (hasUpperCase(input) && !hasLowerCase(input));
  };

  var isAskingQuestion = function(input) {
    return isQuestion(input) && (hasNumber(input) || hasLowerCase(input));
  };

  var isMakingStatement = function(input) {
    return hasNonWhitespace(input);
  };

  var isSilent = function(input) {
    return !hasNonWhitespace(input);
  };

  switch (true) {
    case isShouting(input):
      return 'Whoa, chill out!';
      break;
    case isAskingQuestion(input):
      return 'Sure.';
      break;
    case isMakingStatement(input):
      return 'Whatever.';
      break;
    case isSilent(input):
      return 'Fine. Be that way!';
      break;
    default:
      throw new Error('No match found.');
      break;
  }
};

module.exports = Bob;
