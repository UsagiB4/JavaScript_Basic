var usr_1 = {usrName:"ABC", id:11111, phone:998877, location:"NeverLand"};
var usr_2 = {usrName:"BCD", id:11112, phone:998876, location:"NeverCity"};

// accessing value of the objects
var usr_id1 = usr_1.id;
var usr_loc2 = usr_2["usrName"];
var key = "phone";
var usr_number = usr_2[key];
console.log(usr_id1, usr_loc2, usr_number);
console.log(usr_2["location"])

// changing value of a key:::::
usr_1.id = 12345;
console.log(usr_1);

// adding new key and value:::::
usr_2.company = "www.usr2.com"
console.log(usr_2);