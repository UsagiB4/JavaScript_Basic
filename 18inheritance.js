class Parents{
    constructor(){
        this.fatherName = "Buy some milk";
    }
}
class Child extends Parents{
    constructor(name){
        super();
        this.name = name;
    }
    fullName(){
        return this.fatherName + " " + this.name;
    }
}

const firstChild = new Child('Justin');
const secondChild = new Child('Vin');
console.log(firstChild.fullName());
console.log(secondChild);
