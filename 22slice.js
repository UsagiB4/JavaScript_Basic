const numbers = [2 ,44, 12, 64, 71, 5]
const part = numbers.slice(1, 3); 
// start from index 1 and finish before index 3 (index 3 is not included)
const part2 = numbers.slice(2)
// this will slice the array from index 2 till the end.
const part3 = numbers.slice(-4, -1)
// this will slice the array from back.
// it will start from index "-4" and finish before index -1(excluding -1)

console.log(part3);

// slice is not distractive. It doesn't change the parent array. Instead, it creates new array.
 
