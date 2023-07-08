// 1.) use logical operator to find wheather the age of a person lies between 10 and 20

// let age=prompt("Enter the age");
let age=12;
if(age>10 && age<20){
    console.log("age lies between 10 to 20");
    // document.write("age lies betwwen 10 to 20\n");
}
else{
    // document.write("Doesn't lies");
    console.log("Doesn't lies");
}


// 2.) write a js program to find wheather a number is divisible bt 2 and 3
let num=18;
if(num%2==0 && num%3==0){
    console.log("number is divisible by 2 and 3 both");
}
else
{
   console.log("not divisible");
}


// 3.) using ternary operator, writhe a program to check ypu can drive or not
// age>=18, you can drive
// age<=18, you can not drive

let umar=20;
console.log(umar<=18?"you can not drive":"you can drive");