const nums = [1, 3 ,53, 2, 4, 11, 30];
let output =[];
//__________________ .map() _________________
// map has 3 main parameters which are 
// 1. element of an array (first param)
// 2. index number(s) (second param)
// 3. the entire array (last param). Returns the whole array
nums.map(function(element, index, array){
    output.push(element)
    console.log(` indexes => ${index}`);
    console.log(` array => ${array}`)
    //return output
})

console.log(output);

//_____________ Filter ____________________
let res = nums.filter(x => x<25);
console.log(res);
res = nums.filter(x => x%2 == 0)
console.log(res)
