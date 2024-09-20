const palindromes = function (string) {
  let firstHalf = "";
  let secondHalf = "";
  let reverseHalf = "";
  let cleanedString = getCleanString(string);
  let index = cleanedString.length % 2 === 0 ? cleanedString.length : cleanedString.length - 1;
 
  firstHalf = cleanedString.slice(0, index / 2)

  if (cleanedString.length % 2 === 0) {
    secondHalf = cleanedString.slice(index / 2 )
  } else {
    secondHalf = cleanedString.slice(index / 2 + 1);
  }

  reverseHalf = secondHalf.split('').reverse().join('');

  if (firstHalf == reverseHalf) {
    return true;
  } else {
    return false;
  }
};

function getCleanString(string) {
  let punctuation = /[ \.,?!]/g;
  let newString = string.replace(punctuation, "");
  newString = newString.toLowerCase()
  return newString;
}

const name = "Race car"
console.log(palindromes(name))


// Do not edit below this line
module.exports = palindromes;
