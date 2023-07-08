// Expression: A fregment of code that producess a value is called an expression
// Every value written is literally an expression ex: 7, "ram" e.t.c

// operators in JavaScript:

//1.) Arithmetic operator
// addition: '+'
// subtraction: '-'
// multiplication: '*'
// division: '/'
// modulus: '%'
// Exponentiation: '**'
// increment: '++'
// decrement: '--'

let a=10;
let b=20;

let sum=a+b;
console.log("sum"+"="+sum); // output:30
let diff=a-b;
console.log("difference=",diff); // output: -10, if diff=b-a, then output:10;
let multiply=a*b;
console.log("multiply=",multiply); // output: 200
let division=a/b;
console.log("division=",division) // output:0.5
let reminder=b%a;
console.log("reminder=",reminder); // output: 0, if a=5, b=2, then a%b=1;
let power=2**3;
console.log("power=",power); // output:8, 2**3 means 2^3=2x2x2
a++;
b--;
console.log("increment=",a); // output:11
console.log("decrement=",b); // outpot:19

// Note: a and b are called operands and these +, -, *,/, % e.t.c are called operators

// 2.) Assignment operators
// '=' : x=5
// 'x+=y' : x=x+y
// 'x-=y' : x=x-y
// 'x*=y' : x=x*y
// 'x/=y' : x=x/y
// 'x%=y' : x=x%y
// 'x**=y': x=x**y
let x=5;
let y=2;
x+=y;
console.log(x); // output:7


// 3.) comparision operator: returns true/false
// '==' equal to , compares two values are equal or not. if equal then reurns true otherwise return false
// '!=' not equal, compares two values are equal or not. if not equal then reurns true otherwise return false.
// '===' comaprare value and its type both, if value and type both equal then return true, otherwise false
// '!==' not equal value not equal type 
// '>' greater than
// '<' less than
// '>=' greater than equal to
// '<=' less than equal to
// '?' ternary operator

let num1=2
let num2=2;
let num3="2";
console.log(num1==num2); // true
console.log(num1==num3); // true
console.log(num1===num3); // false
console.log(num1!=num2); // false
console.log(num1>num2); // false
console.log(num1<num2); // false
console.log(num1>=num2); // true
console.log(num1<=num2); // true

// 4.) logical operators
// '&&' logical and , it returns true only both the condition are ture, otherwise returns false
// '||' logical or , return true if atleast one condition is true
// '!' logical not,  return false if condition are true , true if condition are false
console.log(num1==num2 && num1==num3); // true
console.log(num1==num2 && num1===num3); // false
console.log(num1==num2 || num1===num3); // true


// javascript ternary operator
// Evaluates a condition and execute a block of code based on it.
let marks=10;
console.log((marks>5)?'pass':'fail'); // output: pass
console.log((marks>10)?'pass':'fail'); // output: fail


