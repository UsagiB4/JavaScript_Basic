var numArr = [12, 56, 32, 66, 74, 93, 199];  // simple array
console.log(numArr);

nthElem = numArr[0]; // access the first element of the array.
//console.log(nthElem);

// updating nth element of the array.
numArr[3] = 99; // this will update the 4th value. 66 > 99
//console.log(numArr);

// finding index
index_num = numArr.indexOf(93); // this will show the index of 93. Returns -1 if not found.
//console.log(index_num);


/*_____ advance array _____ */
// adding element to array
numArr.push(100); // adding 100 to array. this will appear at the end of the array.
numArr.push(343);
console.log(numArr);
// removing element from array using POP.
numArr.pop(); // this will remove the last element from the array by default.
//console.log(numArr)
//console.log(numArr.length)  // find out length of array.

listName = ['apple', 'banana', 'grape', 'rice', 'orange', 'pumpkin', 'cherry', 'berry', 'corn'];
// to add a new element at the beginning, we use unshift(element)
listName.unshift('Duck');
console.log(listName);
// to remove the first element from the array, we use shift();
listName.shift();
console.log(listName);

// slice an array
newNames = listName.slice(2, 6); // this will slice the list from index 1 to 4;
console.log(newNames);

