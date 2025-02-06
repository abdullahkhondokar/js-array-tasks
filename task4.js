// Checking if it's an Array:

// Create different variables, each containing either an array or a non-array value.
const numbers = [23, 454, 676, 324, 234];
const names = ['rahim', 'karim', 'salim', 'alim'];
const isPassed = true;
const age = 24;
const address = 'Dhaka, Bangladesh';
const blankArray = [];

// Now use isArray to check if each variable is an array.
console.log(Array.isArray(numbers));
console.log(Array.isArray(names));
console.log(Array.isArray(isPassed));
console.log(Array.isArray(age));
console.log(Array.isArray(address));
console.log(Array.isArray(blankArray));