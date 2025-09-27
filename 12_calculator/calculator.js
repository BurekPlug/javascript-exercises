const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(arr) {
	return arr.reduce(((total, value) => total + value), 0);
};

const multiply = function(arr) {
  return arr.reduce(((total,value) => total * value),1)
};

const power = function(a, b) {
	let product = 1;
     for(let i = 0; i<b; i++) {
        product = product * a;
      }
  return product;
};

const factorial = function(a) {
	let sum = 1;
  if(a == 0)
  {
    return 1;
  }
  else
  {
    for(let i = a; a>0; a--) {
      sum = sum * a
    }
  }
  return sum;
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
