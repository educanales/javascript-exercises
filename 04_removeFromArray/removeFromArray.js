const removeFromArray = function(array, value, ...moreValues) {
  let index = array.indexOf(value);
  if (moreValues) console.log(moreValues);
  let otherIndex = array.indexOf(...moreValues);
  console.log(otherIndex)
  let firstHalfArray = array.slice(0, index);
  // console.log(firstHalfArray)
  let secondHalfArray = array.slice(index + 1);
  // console.log(secondHalfArray)
  let newArray = firstHalfArray.concat(secondHalfArray);
  // console.log(newArray)
  return newArray;
};


let myArray = [1, 2 ,3 ,4];
console.log(removeFromArray(myArray, 3, 4));

// Do not edit below this line
// module.exports = removeFromArray;
