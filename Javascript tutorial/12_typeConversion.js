//Generally three type of types Concersion in javascript

// 1. String Type Conversion
// converting into string datatype from any other datatype
let num=12;
console.log(typeof(num)); // number

let str=String(num);
console.log(typeof(str)); // string
// another method
let str1=num.toString();
console.log(typeof(str1)); // string

let bool=false;
console.log(typeof(bool)); // boolean

let str2=String(bool);
console.log(str2);       // false
console.log(typeof(str2));  // string




// 2. Numeric Type Conversion
// conerting into number datatype from another datatype

let s="1234"
console.log(typeof(s)) // string

let num1=Number(s);
console.log(num1+5); // 1234+5= 1239
console.log(typeof(num1)); // number

// another method
let num2=parseInt(s);
console.log(typeof(num2)); // number

let num3=parseFloat(s);
console.log(typeof(num2)); // number



// 3. Boolean Type Conversion
// converting into boolean

let st="false";
console.log(typeof(st)); // sstring

let bool1=Boolean(st);

console.log(typeof(bool1)); // boolean


// Note: If we try to convert following datatype into anothers then it ll get converted to
/*
null => 0
undefined => NaN
true => 1
false => 0
*/


// Note: alert(), prompt(), function attomatically converts datatype into string.