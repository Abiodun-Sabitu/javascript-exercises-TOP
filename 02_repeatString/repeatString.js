const repeatString = function (repeatedText, xNumber) {
  let result = "";
  for (let i = 0; i < xNumber; i++) {
    result += repeatedText;
  }
  if (xNumber < 0) {
    return "ERROR";
  }
  return result;
};

repeatString("hey", 3);
// Do not edit below this line
module.exports = repeatString;
