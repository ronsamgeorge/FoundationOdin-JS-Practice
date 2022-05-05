const add = function() {
	return arguments[0] + arguments[1]; 
};

const subtract = function() {
	return arguments[0] >= arguments[1] ? (arguments[0]-arguments[1]) : (arguments[1]-arguments[0]);
};

const sum = function() {

  const array = Array.from(arguments[0]);
    
	const finalResult = array.reduce((result,argument) => { 
    result += argument;
    return result
  },0);

  return finalResult;
};

const multiply = function() {

  
  const array = Array.from(arguments[0]);
    
	const finalResult = array.reduce((result,argument) => { 
    result *= argument;
    return result
  },1);

  return finalResult;
};

const power = function() {
	return arguments[0]**arguments[1]
};

const factorial = function() {
	let finalResult = 1;
  for(let i = Number(arguments[0]); i>0; i--){
    finalResult *= i;
  }

  return finalResult;
};


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
