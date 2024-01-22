const removeFromArray = function (providedArray, ...args) {
  const modifiedArray = providedArray.filter((providedItem) => {
    // console.log(args, "hello")
    return !args.includes(providedItem);
  });
  return modifiedArray;
};

removeFromArray([1, 2, 3, 4, 5], 5);

// Do not edit below this line
module.exports = removeFromArray;
//Implement a function that takes an array and some other arguments then removes the other arguments from that array:
