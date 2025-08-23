const convertToCelsius = function(FH) {
  return Math.round((FH - 32) * (5/9) * 10) / 10;
  
};

const convertToFahrenheit = function(Ce) {
  return Math.round((Ce * 9/5 + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
