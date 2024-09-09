const removeFromArray = function(array, ...values) {
  let newArray = array.filter(value => !values.includes(value));
  return newArray;
};

let myArray = [1, 2 ,3 ,4];
console.log(removeFromArray(myArray, 1, 4));

// Do not edit below this line
module.exports = removeFromArray;
