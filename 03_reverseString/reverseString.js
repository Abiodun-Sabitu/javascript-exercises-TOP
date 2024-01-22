const reverseString = function (word) {
  const getWordReady = word.split("");
  return getWordReady.reverse().join("");
};

reverseString("hello");
// Do not edit below this line
module.exports = reverseString;
