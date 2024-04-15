const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	let sum = 0;
  for (let a in arr) {
    sum += arr[a];
  }
  return sum;
};

const multiply = function(arr) {
  let product = 1;
  for (let a in arr) {
    product *= arr[a];
  }
  return product;
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(num) {
	let result = 1;
  for (let i = 1; i < num + 1; i++) {
    result *= i;
  }
  return result;
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
