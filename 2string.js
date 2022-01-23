var line = `Hello world, have a good day.`;
var line2 = "Good bye world, see you soon.";

allCap = line.toUpperCase();  // this will convert the string to uppercase
console.log(allCap);
allLow = line2.toLocaleLowerCase();  // this will convert the string to lowercase.
console.log(allLow);

// find a word in the string.
// if the word is not in the string, it will return -1.
/* console.log(line.indexOf("have")); */


// splitting a string.
// .split('par') this will split the string from the matching parameter.
// returns a list.
console.log(line2.split(' '));
