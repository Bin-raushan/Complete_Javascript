// We use loops to perform repeated action.
// for example if you have to print number from 1 to 1000, it's very hectic to print number one by one
// so, we use loops to print it easily

// Types of loops in Javascript
// 1.) for loop: loop/repeat a block of code numbers of times.
// 2.) for in loop: loops throught the keys of an object.
// 3.) for of loop: loops throught the values of an object
// 4.) while loop: loops a block of code on a specific condition
// 5.) do-while loop: simmilar to while loop, But it runs atleast once.

// 1.) for loop:
//  loop/repeat a block of code numbers of times.

/*
syntax:
for(initialization; condition; increment/decrement){
    // code to be executed
}
*/

// Print the sum of first n natural number
let n=3;
let sum=0;
for(let i=1;i<=n;i++){
    sum=sum+i;
}
console.log("sum=",sum);


//2.) for in loop:
// loops throught the keys of an object.

/*
syntax:
for(key in object){
    // code to be executed
}
*/

let student={
    name:"Raushan",
    age: "22",
    loaction: "Patna",
    roll: 58
}

for(let a in student){
    console.log(a+ "=" +student[a]);
}

let ar=["aam","aanar","kela", "narangi"]
for(let item in ar){
    console.log(`${item} : ${ar[item]}`);
}


// 3.) for of loop:
// loops throught the values of an object.
// Loops/ iterate over an array or other iterable objects ex: strings 

/*
syntax:
for(variable of iterable-object){
    // code to be executed
}
*/
let str="raushan";
for(let i of str){
    console.log(i); // prints each letter one by one
}

let arr=[1,2,3,4,5];
for(let j of arr){
    console.log(j);
}



// 4.) while loop:
// loops a block of code on a specific condition
// condtion check before the entering in the loop

/*
syntax:
while(condition){
    // code to be executed
}

// Note: if condition never becomes false , loop will never end 
 
*/
let i=0;
while(i<10){
    console.log(`hello ${i}`)
    i++;
}

// 5.) Do while loop
// condition check in last
// simmilar to while loop , but the code will be executed atleast once.

/*
 syntax:
 do{
    // code to be executed
 }while(condition)

*/
let k=0;
do{
    console.log(k); // executed atleast once
    k++;
}
while(k<10);