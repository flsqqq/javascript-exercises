const convertToCelsius = function(fInput) {
  const converted = (fInput - 32) * 5/9;
  return Math.round(converted*10)/10;;
};

const convertToFahrenheit = function(cInput) {
  const converted = (cInput * 9/5 + 32);
  return Math.round(converted*10)/10;;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
