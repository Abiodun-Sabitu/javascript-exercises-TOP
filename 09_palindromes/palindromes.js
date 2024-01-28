const palindromes = function (str) {
  let regex = /[^A-Za-z0-9]/g;
  let cleanedString = str.replace(regex, "").toLowerCase();
  const result = cleanedString.split("").reverse().join("");
  return result === cleanedString;
};

// Do not edit below this line
module.exports = palindromes;
