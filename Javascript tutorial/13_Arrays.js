// Arrays in JavaScript
// array is a vriable which can store multiple value.

// Two importan Properties of an array in javascript
//1.) size of javascript array is not fixed, we can add or remover elements as much as want at the runtime.
// 2.) Array can store different types of data

// Syantax
let arr=[1,2,3,4,5];
let arr1=[10, "raushan" , 12.5, true];
let arr2=[11, 12, "ram", ["apple", "orange"]];

// indexing start frrom 0 to size-1 in javascript 
// example: in array arr indexinxing of 1->0, 2->1,.....5->4
// example: in array arr1 indexinxing of 10->0, 'raushan'->1, 12.5->2, true->3.

// we can access javascript array element with the help of indexing
console.log(arr); // output: [1,2,3,4,5]
console.log(arr1); // output: [10, 'raushan', 12.5 , true]

console.log(arr[0]); // output: 1
console.log(arr[3]); // output: 4
console.log(arr1[1]); // output: raushan
console.log(arr2[3][1]) // output: orange

// if we give any invalid inddex then it return undefined

// Updating array element
// Arrays are mutable, elements can be changed
arr[0]=10;
console.log(arr) // [10,2,3,4,5]


// Another way of creating array using constructor
let arr3= new Array(1,2,3,4,5);
console.log(arr3); // output: [1,2,3,4,5]
console.log(arr3[1]); // output: 2

// Type of array is object, we can check it using typeof() orperator
console.log(typeof(arr));  // object
console.log(typeof(arr1));  // object
console.log(typeof(arr3));  // object

// -------------------------------------------------------------------------------------------------

// Important properties and methods of array

// 1.) length -> it tells the number of elements present in an array
console.log(arr.length);  // 5
console.log(arr2.length); // 4

// 2.) Looping through arrays: 
// arrays can be looped through classical javascript loop (for loop, for-in loop and for-of loop)
// arrays can also loop throgh a method for each()
// forEach() - it perform the specified action upon each element of array 

let new_arr=[1,2,"raushan", 12.5];

// classical for loop:
for(let i=0;i<new_arr.length;i++){
    console.log(new_arr[i]); // output: 1,2,raushan, 12.5
}

// for-in loop -> For in loop can be used to get keys/ index from an array
for(key in new_arr){
    console.log(key); // output: 0, 1, 2, 3
}

// for-of loop -> for of loop can be used to get values from an array

for(value of new_arr){
    console.log(value); // 1,2,raushan, 12.5
}

// forEach(value,index,array) -> it is a method/function, which perform the specified action upon each element of array 
// It calls a function, once for each element of an array
// syntax:
/*
array_name.forEach((value,index,array)=>{
    // block of code to be executed
    // index , array agrument are optional

});
*/
// calculate the sum of array element
let number=[10,12,15,18,20];
let sum=0;
number.forEach((element, i)=> {
    sum+=element; 
    // console.log("index=", i) ; it will print index number, this argument is optional
});
console.log("sum=",sum);

//      or
// number.forEach(function(it){
//     sum=sum+it;
// });
// console.log(sum);



// 3.)  Array.from() -> it is used to create an array from any other object or datatype
let str="raushan"
console.log(str);
console.log(typeof(str));

let ar=Array.from(str);
console.log(typeof(ar));
console.log(ar);


// 4.) push(element) -> This function  is used to insert/ add element at the end of array element. returns new array length
// 5.) pop()  -> This function is used to remove element from last, returns poped value
// 6.) unshift(element) -> Add/ insert element at begining/ start, and return new length of array
// 7.) shift() -> removes element from begining/start, and return removed element
let a=[1,2,3,4,5,6,7];
console.log(a);
a.push(8);     // 8 get added at the end
console.log(a);
a.pop();     // last element(8) get rmoved
console.log(a);
a.shift(); // first element(1) get removed
console.log(a);
a.unshift("one"); // one get added to the begining
console.log(a);

// 8.) toString() -> converts an array to the string of comma seperate value
let n=[1,7,9];
let s=n.toString();
console.log(s); // 1,7,9

// 9.) join() -> joins all the array elements using the given seperator
console.log(n.join("-")); // 1-7-9

// 10.) delete -> array element can be deleted using delete operator using index number
delete n[0];
console.log(n); // [null, 7,9]


// 11.) concat() -> used to add different existing array into a new array, it does not change in existin array
let add=arr.concat(arr1,arr2);
console.log(add);

// 12.) sort() -> it shorts the array alphabetically
// By default, the sort() function sorts values as strings.
// This works well for strings ("Apple" comes before "Banana").
// However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
// Because of this, the sort() method will produce incorrect result when sorting numbers.
// You can fix this by providing a compare function:

let arry=["apple","orange","banana", "cocunut"];
arry.sort();
console.log(arry); 

// 13.) reverse() -> it reverse the element in the source array
arry.reverse();
console.log(arry);

// shorting numric array
let numric=[1,20,3,40,12,50]
numric.sort(function(a, b){return a - b});
console.log(numric);
numric.reverse()
console.log(numric);


// 14.) slice(start,end) -> slices out some piece from an array and creates a new array, start->include, end->excluded
let sl=[1,2,3,4,5];
let new_sl=sl.slice(1,3); // it will take out element from index 1 to index 2, and retruns into the new array
console.log(new_sl); // [2,3]
console.log(sl); // [1,2,3,4,5] original array doe nots changes

// 15.) splice(start_index, no_of_element) -> use to delete elements from a givent index to the given number.
// start_index:- from where you have to delete the element
// no_of element:- how many element you have to delete from start_index
// it modifies in the original array.
let spl=[1,2,3,4,5,6];
// spl.splice(1,3);  // deletes 3 elements after from index 1
// console.log(spl);// [1,5,6]

// splice can be used to add new elemts in array
spl.splice(4,1,23,24);
// 2: position to add
// 1: numbers of elements removed
// 23,24: elements to be added from index 2
console.log(spl);

//  some more methods
let num=[10,12,12,14,16,12,18, 18,20];
console.log(num.indexOf(12)); // return index number of firsr occurrence of element
console.log(num.lastIndexOf(12)) // return the index of last occurence of element
console.log(num.includes(12))// it checks lelement present or not , true->present, false->not presetnt

// ----------------------------------------------------------------------------------------------------------

// higher order array methods

// 1.) map(value,index,array): -> creates a new array by performing some operation on each existing array element
const mp=[1,2,3,4,5];
let new_mp=mp.map((value)=>{
    return value+1;
});

console.log(new_mp);// output: [2,3,4,5,6]

// difference b/w map() and forEach() :
// map is used when we have to make a new array doing some operation in a existing array
// forEach is used when we want to perform operation in existing array


// 2.) filter(value) : it creates a new array and fill the array by filtering the elements by given condition from an existing array
let fl=[1,2,3,4,5,6];
let new_fl=fl.filter((value)=>{
    return value>2; // return all value which is greater than 2
});
console.log(new_fl);// [3,4,5,6]

// 3.) reduce(value) :- It reduces the array to the single value, according to the action performed
const rd=[1,2,3,4,5];
let new_rd=rd.reduce((function(val1,val2){
    return val1+val2;

}));
console.log(new_rd); // output:15  , 1+2=3, 3+3=6, 6+4=10, 10+5=15 






