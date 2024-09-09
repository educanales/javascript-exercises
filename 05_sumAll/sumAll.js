const sumAll = function(firstValue, secondValue) {
  let sum = 0;
  if (
    firstValue < 0 || 
    secondValue < 0 || 
    secondValue % 1 !== 0 || 
    firstValue % 1 !== 0 ||
    typeof firstValue !== 'number'  ||
    typeof secondValue !== 'number'
  ) {
    return 'ERROR';
  }
  if (firstValue < secondValue) {
    for (let i = firstValue; i <= secondValue; i++) {
      sum += i;      
    } 
  } else {
      for (let i = secondValue; i <= firstValue; i++) {
        sum += i; 
      }
    }
  return sum;
};

sumAll(1, 4)

// Do not edit below this line
module.exports = sumAll;
