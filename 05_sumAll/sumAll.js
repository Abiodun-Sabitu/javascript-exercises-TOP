//ascending loop helper function
const ascendLoop = (num1, num2) => {
  let result = 0;
  for (let i = num1; i <= num2; i++) {
    // console.log(i)
    result += i;
  }
  return result;
};

//descending loop helper function
const descendLoop = (num1, num2) => {
  let result = 0;
  for (let i = num1; i >= num2; i--) {
    // console.log(i)
    result += i;
  }
  return result;
};

//SumAll + type checker loop helper function
const sumAll = (num1, num2) => {
  while (
    Number.isInteger(num1) &&
    Number.isInteger(num2) &&
    num1 >= 0 &&
    num2 >= 0
  ) {
    if (num1 > num2) {
      return descendLoop(num1, num2);
    }
    return ascendLoop(num1, num2);
  }
  return "ERROR";
};

sumAll(50, 100);

// Do not edit below this line
module.exports = sumAll;
//Implement a function that takes 2 integers and returns the sum of every number between(and including) them:
