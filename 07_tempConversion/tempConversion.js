const ctof = function(inCelsius) {
  return Math.round(((inCelsius * (9/5)) + 32) * 10) /10;
};

const ftoc = function(infahrenheit) {
    return Math.round(((infahrenheit -32) * (5/9)) *10)/10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
