const person = {pName: "Bustin Jeaber", age: 123, job: "Shouter", address: "Hidden", phone: 123696969};

const {phone} = person;
const address = person.address;
const {age, job} = person;
console.log(address);
console.log(phone);
console.log(age, job)

const country = ['Bd', 'USA', 'china', 'Arab', 'Bahrain', 'Iraq', 'Sudan', 'Bing-chilling']

const [myCountry, terrorist] = country;
console.log(myCountry, terrorist);


const complexObj = {uName: 'jamal', info:{address: 'newplace', phones: 1122331122}, salary: 2322323, age: 23}

const {phones} = complexObj.info
console.log(phones)