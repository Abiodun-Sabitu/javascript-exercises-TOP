const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (xArray) {
  let result = xArray.reduce((acc, currVal) => acc + currVal, 0);
  return result;
};

const multiply = function (a, b) {
  return a * b;
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (givenNumber) {
  let result = 1;
  for (let i = givenNumber; i > 0 && i <= givenNumber; i--) {
    result *= i;
  }

  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
