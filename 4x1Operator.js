/*
Js has some basic math operators like: '+', '-', '*', '/', '%', '++', '--'.
Beside that it also has some advance operators that are quite helpful.
*/

// '%=' returns remainder. 
let a = 23;
a %= 3; // same as: a = 23 % 3;
console.log(a)

// '**=' returns powered value
let b = 4;
b **= 2;  // same as: b = 4 ** 2
console.log(b);

// ____________|| comparison operators ||____________
var num1 = 433333;
var num2 = 44;
var num3 = 433333;

// '==' compares if 2 values are equal or not;
console.log("n1 and n2 is equal:",num1 == num2,'\n', 'n1 and n3 is equal:', num1 == num3);

// '===' checks if 2 values are equal and same type
console.log("n1 and n2 is equal:",num1 === num2,'\n', 'n1 and n3 is equal:', num1 === num3);


//____________ Logical Operators ____________
// '&&' works as AND
console.log("&& operator: ")
console.log(1 == 1 && 2==2) // returns true as both of them are true
console.log(1 == 9 && 2 == 2) // returns false as 1 of them is false
console.log(1 == 9 && 2 == 3)  // also returns false as both of them is false.

// '||' works as OR
console.log("|| operator: ")
console.log(1==1 || 2==3) // returns true if any of them is true
console.log(1==2 || 2==4) // returns false only if both of them are false.

// '!' works as NOT
console.log("! operator: ")
console.log(!(1==2)) // inverse the Logic and turns true into false and false into true.
console.log(!(1==1))

