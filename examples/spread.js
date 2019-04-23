// Functionality
// spread with function arguments
function sum(a, b, c) {
	return a + b + c;
}

const numbers = [1, 2, 3];
// it unwraps/extracts the values
const result = sum(...numbers);
console.log('Sum result:', result);

// Functionality
// Spread unwraps any iterable, like strings
let stringSpread = sum(..."john")
console.log('String spread:', stringSpread);

// Functionality
// Spread unwraps arrays
console.log("Array spread:", ...[1, 2, 3]);

// Example Use Case
// Spread can be used to combine arrays in place
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArr = [...arr1, "middle", ...arr2];
console.log('Combined array:', combinedArr);

// And works with Objects as of ES2018
const obj1 = { name: 'Jim' };
const obj2 = { age: 50 };
const combinedObj = { ...obj1, ...obj2 };
console.log("Object spread:", combinedObj);