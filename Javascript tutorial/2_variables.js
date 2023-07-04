// variables: Js variables are containers for storing data values.

// ways to create variables : let, var, const

// 1.) Let 
// It is scoped variable
// we can't use let variable outside the scope where it is declared
// we can change the value of let variable 
let message;
message="Hello how are you?";
console.log(message);

let a=12;
let b=20;
let c;
c=a+b;
console.log("The value of c is", c);


message="I am fine"; // we can update the value of let variale
console.log(message);


// 2.) const
const user="kumarraushan";
console.log(user);

// user="raushankumar" // we can't update the value of const variable once its assigned
// console.log(user);


// 3.) var
// This is global or function scope variable
// var has no block scope

var value=5;
console.log(value);

// var let difference example:
if(5>2){
    let name="raushan";
    console.log(name);

    var city="patna";
    console.log(city)

}

// redecalaration of same variable is posssible in var
    // var x=56;
    // var x=89;

// var variables can be declared below their use
z=56
console.log("value of x=",z);
var z;

// console.log(name); // we can't use let varible outsside scope
console.log(city); // we usse var variable outside


// Naming rule of variables/identifiers
/*
1.) variable name can not be start with digit
2.) Name must contain only letters, digit, or symbols $ and _
3.) resserved keywords can not be used as variable name
4.) case sensitive


 */


