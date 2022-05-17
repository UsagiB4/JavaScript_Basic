const multiNum = num => num*2;  // this is a array function
const addIt = (num1, num2) => num1 +num2;  // array is defined with '=>'
let multply = function(a, b){  //another way to define an arrow function.
    return a * b
}


const result = multiNum(3);
console.log(result);
console.log(addIt(1,4));
console.log(result);
console.log(multply(2,3));