//1.) create a variable of type string and try to add a number to it
//2.) use typeof oerator to find datatype of the string in above question
 let str="a";
 console.log(typeof(str)); // output:string
 str=1;
 console.log(str);
 console.log(typeof(str)); // output:number


 // 3) create a const object in javascript can you change it to hold a number later
 // 4.) try to add a new key in the above const object. Are you able to do it?

 const student={
    name: "raushan",
    roll: 58,
 }
 console.log(student);
 student.roll=60;
 console.log(student); // roll=60 get updated

 // trying to add a new key
 student.add=10;
 console.table(student); // new key get added


 // write a program to create a word meaning dictionary of 5 words

 let dictionary={
    apple:"sev",
    mango:"aam",
    banana:"kela",
    coconut:"nariyal",
    orange:"narangi"
 }

 console.table(dictionary);
