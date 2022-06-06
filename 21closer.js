function add(){
    let total = 0;
    return function(){
        total++;
        return total;
    }
}

let sum = add();
console.log(sum());  // called once so the value of total will be 1
console.log(sum(sum(sum()))) // called 3 times so the value will be 1 + 3 = 4

let sum2 = add();
console.log(sum2(sum2()))  // as sum2 is a different variable, this will preserve the value of add() differently than sum.

console.log(sum()) // here the sum value will be 5 as the previous value of "sum" was 4
console.log(sum2(sum2(sum2())))

