// 1.) create an array of numbers and take input from user to add this number to the array
let arr=[1,2,3,4,5];
// let user=prompt("Enter the number to add into array");
// user=parseInt(user);
// arr.push(user);
// console.log(arr);

// 2.) keep adding number in above question untill user doesn't enter 0;

let user;
while(user!=0){
    user=prompt("Enter the number to add into array");
    user=parseInt(user);
    arr.push(user);
}
console.log(arr);


// 3.) filter the number divisible by 10 from a given array
let number=[5,10,15,20,25,30,35,40,45,50];
let new_num=number.filter((value)=>{
    return value%10==0;
});
console.log(new_num);


// 4.) create an array from square of a given number
let mp=[2,4,6,8,10];

let new_mp=mp.map((value)=>{
    return value*value;

});
console.log(new_mp);



// 5.) use reduce to calculate factorial of a given number from an array of first n natural number
// n being the number which factorial need to be calculated
let rd=[1,2,3,4,5];
let fact=rd.reduce((val1,val2)=>{
    return val1*val2;

});
console.log(fact);


