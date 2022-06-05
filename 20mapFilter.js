const nums = [1, 3 ,53, 2, 4, 11, 30];
let output =[];
//__________________ MAP _________________
nums.map(function(element, index, array){
    output.push(element)
    //return output
})

console.log(output);

//_____________ Filter ____________________
let res = nums.filter(x => x<25);
console.log(res);
res = nums.filter(x => x%2 == 0)
console.log(res)
