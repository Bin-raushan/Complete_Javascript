// 1.) Write a program to print the marks of a student in an object using for loop
// 2.) write above program using for in loop

let student={
    raushan:88,
    pankaj:90,
    abhishe:95,
    nitish:50
}
 console.log(Object.keys(student)); // it return all the keys of an object. i.e ['raushan', 'pankaj', 'abhishek', 'nitish']
// using for loop
for(let i=0;i<Object.keys(student).length;i++){
    console.log(Object.keys(student)[i] + ":" + student[Object.keys(student)[i]]);
}

// using for in loop

for(let marks in student){
    console.log(marks + ":" + student[marks]);
}


// 3.) write a program to print try again untill the user enters correct number

let correct_number=10;
let i;
while(i!=correct_number){
    i=prompt("guess  the number");
    console.log("try again");
}
console.log("You have Guessed the correct number");

// 4.) write a function to find mean of 5 numbers

let mean=(a,b,c,d,e)=>{
    return (a+b+c+d+e)/5;
}
let result=mean(1,2,3,4,5);
console.log(result); // prints 3