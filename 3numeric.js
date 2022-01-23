var num1 = '12';
var num2 = '3.2221';  // this is a string 
var addition = num1 + num2;
console.log(addition);  // awkward result as we are adding int with str.
num3 = parseInt(num1); // converting num1 into integer.
num4 = parseFloat(num2); // converting num2 into float.
addition = num3 + num4;
console.log(addition);  // this will print a long floating point number.
addition = addition.toFixed(5);  // this will limit the floating point upto 5 digit.
console.log(addition);
