var numArr = [12, 56, 32, 66, 74, 93, 199];  // simple array
console.log(numArr);

nthElem = numArr[0]; // access the first element of the array.
console.log(nthElem);

// updating nth element of the array.
numArr[3] = 99; // this will update the 4th value. 66 > 99
console.log(numArr);

// finding index
index_num = numArr.indexOf(93); // this will show the index of 93. Returns -1 if not found.
console.log(index_num);
