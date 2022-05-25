function add(a, b){
    b = b || 20; // you can add '||' sign to define default value.
    return a + b;
}

function multiply(a, b = 10){ // this is also another way to set default value.
    return a * b;
}

console.log(add(2, 3)) // parameter given
console.log(add(5)) // using default value

console.log(multiply(2, 2)) // parameter given
console.log(multiply(3.4)) // missing parameter

