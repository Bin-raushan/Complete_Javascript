// There are three types of scope in javascript

// 1.) Globla scope : maximum accessbility, you can use global variable anywhere in the program.
var a=10;
console.log(a); // prints 10;

function myfun(){
    console.log(a); // print 10
}
myfun(); // function call


// 2.) local or function scope:

// any variable or function declared inside a function have funtion scope. which means declared variable inside a function can 
// be used only inside that function,not outside

function myfun2(){
    let b=20;
    console.log(b); // prints 20
}
myfun2(); // function call
// console.log(b); // variable b can't be used outside the function


// 3.) Block scope: 
// related to let and const
// if we declared any variable using let or const we can use that varible only inside that block only where variable declare, not outside.
// if we declared any variable using var inside a block we can use that variable outside also.

function myfun3(){
    let c=20;
    let d=20;
    if(c==d){
        let sum=c+d;
        console.log(sum); // prints 40
    }
    // console.log(sum); // we can't use block scope variable declared using let  outside the block.
}
// myfun3();

function myfun4(){
    let c=20;
    let d=20;
    if(c==d){
        var sum=c+d;
        console.log(sum);
    }
    console.log(sum);  // we can use block scope variable outside that block if we declred variable using var
}
myfun4();




