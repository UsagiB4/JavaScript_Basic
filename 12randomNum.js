a = 1.234;
b = 3.499;
c = 5.666;

a = Math.floor(a); // gives the lest possible value. type> int
console.log("Floor value " + a);
b = Math.ceil(b);  // returns the largest possible value. type> int
console.log("Ceiling value " + b);
c = Math.round(c); // returns the closest int value
console.log("Round value " + c);


let num = Math.random(); // returns a random float number.
num = num * 1000;
num = Math.round(num);
console.log(num);