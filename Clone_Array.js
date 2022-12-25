//Clone an Array
// arr([1, 1]) ➞ [1, 1, [1, 1]]

const arr = (ar) => [...ar,ar];

console.log(arr([1, 1]));