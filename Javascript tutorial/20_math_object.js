// All important mathematical operation can be done by using math object propertyies and methods
// important math operations

console.log(Math.PI); // output: 3.1415926
console.log(Math.round(12.456789)); // 12
console.log(Math.sqrt(16)) // 4
console.log(Math.sqrt(20)) // 4.4721
console.log(Math.floor(55.234567)); // 55 
console.log(Math.pow(2,3)); // 8
console.log(Math.abs(-21)) ; //21
console.log(Math.ceil(3.5)); // 4

//readom number generation
let random_number=Math.random() // generate a floating point number from range [0 to 1) 
console.log(random_number);

// generating 2 digit random number
console.log(random_number*100);

// 3 digit
let rand=random_number*1000;

// removing decimal
console.log(Math.trunc(rand));


// min-max
console.log(Math.min(4,5,6)); // 4
console.log(Math.max(4,5,6)); // 6


// trigonometry operations
// put value in radian
console.log(Math.sin(30*(Math.PI/180)))
console.log(Math.cos(30*(Math.PI/180)))


// logrethemic
console.log(Math.log10(25));


// we can see total math properties and method
console.log(Math);

