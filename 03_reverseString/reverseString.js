const reverseString = function(word) {
  let reverseWord = '';
  for (let i = word.length; i >= 0; i--) {
    reverseWord += word.slice(i, i + 1);
  }
  return reverseWord;
};

// Do not edit below this line
module.exports = reverseString;
