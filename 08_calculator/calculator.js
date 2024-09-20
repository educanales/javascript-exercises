const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((total, current) => total + current, 0);
};

const multiply = function(array) {
  return array.reduce((total, current) => total * current, 1);
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(number) {
  let total = 1;
	for (let i = 1; i <= number; i++) {
    total *= i;
  }
  return total;
};
console.log(factorial(5));


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
