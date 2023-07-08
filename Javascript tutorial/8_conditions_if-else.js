// conditional statements
// sometimes we might have to execute  a block of code based on some condition only.
// This thins can be done if , else statements

// 1.) if statement : 
if(5>2){
    console.log("five is greate than 2"); // only execute when if codition is true
}
if(5<2){
    console.log("not executed"); // thsi statement will not executed
}


// 2.) if-else statement :
let age=10;
if(age>18){
    console.log("Ypu are elligible for voting"); // this statement executed when condition is true
}
else{
    console.log("You are not elligible"); // if condition is false then this statement will execute
}


// 3.) if - else if statements
// checks multiple conditions one by one
// if any condition get true first , it will get executed and foreget rest conditions
// whichever condition is true first it excuted that blcok of code 
let marks=10;
if(marks<=20){
    console.log("Fail"); // executed when if condition is true
}
else if(marks<=40){   
    console.log("Grade C") // only execute when condition is true .
}
else if(marks<=50){
    console.log("Grade B")
}
else if(marks<=100){
    console.log("Grade A");
}
else{
    console.log("invalid");
}


// nested if else
// write a program to check which one is greate among three numbers
let a=100;
let b=12;
let c=5;
if(a>b){
    if(a>c){
        console.log("a is greater")
    }
    else{
        console.log("c is greater")
    }
}
else{
    if(b>c){
        console.log("b is greater");
    }
    else{
        console.log("c is greater");
    }

}


// truthy and falsy value
// 1.) Any +ve or -ve value is consider as truthy value in javascript
// 2.) 0 is consider as falsy value in JS
// 3.) true, is consider as truthy value
// 4.) false, is consider as falsy value
// 5.) "abc" is consider as truthy value
// 6.) " ", empty string is consider as valsy value
// 7.) null, is falsy value
// 8.) undefined, is falsy value
// 9.) Nan, not a number is conside as falsy value

if(5){
    console.log("truthy value");
}
if("abc"){
    console.log("truthy value");
}
if(0){
    console.log("falsy"); // not executed
}

// what is NaN in javascript
// In JavaScript, NaN is short for "Not-a-Number". 
//In JavaScript, NaN is a number that is not a legal number.
// Nan is not equal to any number, even it's not equal to Nan itself 
//The Global NaN property is the same as the Number.

// legal number: 100, 20, 0, -222
// illigal number: "ram"/"shyam ", 100/"ram" e.t.c

let n1="ram";
let n2=10;
let n3="shaym";
console.log(n1/n3); // output:  Nan

// isNan() method : return true if given number ia illigal, otherwise false
// isNan() is a global method , it converts tested value to a number, then test
console.log(isNaN(n1/n3)); // true
console.log(isNaN(n2/2)); // false

// number.isNan() method : can be used only for numbers




// Switch statements in javascript
// It overcomes with the multiple if-else statements

// write a program to print Days according to its number. ex- 1-monday, 2-tuesday,.... 7-sunday

const day=2;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("Thrusday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("sunday");
        break;
    default:
        console.log("Invalid");
        break;
}

// Note: If we do not write break statements after each test cases program will also execute rest of all below code
//       from where test case matches.
// default is an optional , if no case matches then the defult value get executed






