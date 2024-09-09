const convertToCelsius = function(fTemp) {
  let cTemp = (fTemp - 32) * 5/9;
  if (cTemp % 1 !== 0) {
    cTemp = Math.round(cTemp * 10) / 10;
  }
  return cTemp
};

const convertToFahrenheit = function(cTemp) {
  let fTemp = cTemp * 9/5 + 32;
  if (fTemp % 1 !== 0) {
    fTemp = Math.round(fTemp * 10) / 10;
  }
  return fTemp;
};

console.log(convertToCelsius(32))

// Do not edit below this line

module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
