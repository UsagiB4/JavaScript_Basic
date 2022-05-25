class Calculator{
    constructor(a, b){
        this.a = a;
        this.b = b;
        this.pi = 3.14159;
        this.add = a+b;
        this.mult = a*b;
        this.sub = a-b;
        this.div = a/b;
    }
}

const calc1 = new Calculator(1, 23);
const calc2 = new Calculator(23, 65);

console.log(calc1.add, calc2.div);
