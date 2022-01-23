var age = 11;
var usr_name = "Bob";
if(age < 12 && usr_name == "Bob"){
    console.log("You are a kid. Go back");
}
else if(age > 23 || usr_name == "alice"){
    console.log('Welcome!');
}
else{
    console.log("I don't know you.");
}
