const users = [
    {id: 232, uname:"Adam", loc:"USA"},
    {id: 323, uname:"Jhon", loc: "UK"},
    {id: 343, uname:"Jake", loc: "USA"},
    {id: 555, uname:"Luke", loc: "USA"},
    {id: 231, uname:"Tarik", loc: "IR"},
    {id: 897, uname:"Buck", loc: "UK"},
    {id: 672, uname:"Steve", loc: "USA"},
    {id: 591, uname:"Tony", loc: "IN"},
    {id: 427, uname:"Nadia", loc: "UK"},
    {id: 311, uname:"Mary", loc: "IN"},
    {id: 228, uname:"Yu", loc: "UK"},
    {id: 140, uname:"Bakey", loc: "IR"},
    {id: 501, uname:"Cath", loc: "USA"},
]

let usersID = users.map(ids => ids.id);
console.log(usersID);
let userNames = users.map(ids => ids.uname);
console.log(userNames);

let uLocation = users.filter(locs => locs.loc == "USA");
console.log(uLocation);

let lowIDs = users.find(low => low.id < 500);
console.log(lowIDs)