const repeatString = function(word, number) {
  let result = '';
  if (number < 0) return 'ERROR';
  for (let i = 0; i < number; i++) {
    result += word;
  }
  return result;
};

console.log(repeatString("hey", 3));

// Do not edit below this line
module.exports = repeatString;
