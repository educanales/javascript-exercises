const fibonacci = function(number) {
  if (typeof number === "string") number = Number(number);
  console.log(number)
  console.log(typeof number)
  if (number === 0) return number;
  if (number < 0) return "OOPS"
  if (number === 1) return 1;

  let prev2 = 0;
  let prev1 = 1;
  let c = 0;

  for (let i = 2; i <= number; i++) {
    c = prev1 + prev2;
    prev2 = prev1;
    prev1 = c;
  }
  return c;
};

console.log(fibonacci(1))

/*
const fibonacci = function(index) {
  let fiboArray = [0];
  for (let i = 1; i <= 10; i++) {
    fiboArray[i] = fiboArray[i - 1] + fiboArray[i];
    // console.log(i)
    console.log(fiboArray[i])
  }
  return fiboArray[5];
};
*/


// Do not edit below this line
module.exports = fibonacci;


