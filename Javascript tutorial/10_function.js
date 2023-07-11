// Functions are used to organized and reused our code
// A javascript function is a block of code design to perform a particular task
// Suppose we have to write code of sum of two numbers  in 100 times in our program
// so, we can write code of sum of two number under a function and we can reuse that function as required
// for using any function we need to call/invoke that function, if we dont's call a function then my function will not work

// syntax of a function:

// 1.) function with no parameter:
/*
function my_fun(){
    // block of code
}
*/
// my_fun(); // function call/ invocation

function my_fun(){
    console.log("hey, Raushan");
}
my_fun(); // prints hey, Raushan
my_fun(); // prints hey, Raushan



// 2.) function with parameter
/*
function raushan(parameter1, parameter2){
    // note here the parameter behave likes local variable
    // block of code

}
*/
// raushan(argument1,argument2); // function call
// Note: A function can also return a value, the value return goes to the caller.

// write a program which return average of two numbers

function average_of_two_numbers(num1, num2){
    let average=(num1+num2)/2
    return average;

}
console.log(average_of_two_numbers(10,12)); // print 11
console.log(average_of_two_numbers(12,15)); // print 13.5


// 3.) Arrow function
// syntax
/*
let function_name=(parameter)=>{
    // code
}
*/
// function_name(argument);

// write a program to print sum of two number using arrpw function

const sum=(a,b)=>{
    let c=a+b;
    return c;
}
let result=sum(10,12);
console.log(result);