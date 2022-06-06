const nums = [2, 442, 52, 7, 71, 934, 213, 773, 21, 9, 623, 7831,456, 92]

const removed = nums.splice(2, 3);
// here the splicing is started at index 2 and going upto 3 elements (not 3th index).
// 2 is the index number where the splicing starts
// 3 is the number of elements to be removed from parent array
console.log(removed)
console.log(nums);

// splice is distractive. It modifies the parent array and creates 2 different arrays

const inject = nums.splice(1, 3, 22, 21, 699, 990, 888)
// here it is removing 3 elements starting from 1 and after that it's adding the rest of the values passed in.
console.log(inject);
console.log(nums);
