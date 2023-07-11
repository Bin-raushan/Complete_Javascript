// 1.) what will the foolowing print in Js
 console.log("harr \" ".length) // output=7

 //2.) explore the includes, startswith, endswith function of a string

 let word="I love Javascript";

 // includes()
 console.log(word.includes("love"));
 console.log(word.includes("hate"));

 // startsWith
 console.log(word.startsWith("I"));
 console.log(word.startsWith("I love"));
 console.log(word.startsWith("love"));

 // endsWith()
 console.log(word.endsWith("t"));
 console.log(word.endsWith("love Javascript"));
 console.log(word.endsWith("love"));


 // 3.) write a program to convert given string in lowercase
 let my_name="RAUSHAN";
 console.log(my_name.toLowerCase());


 // 4.) extract the amount from this string "I have 100 rupees"

 let str="I have 100 rupees"
 let amount=str.search("100");
 console.log(str.substring(7,10));


// 5.) try to change 4th character of a given string, are you able to do it?
let ch="kaushal"
ch[3]='b'; // we can't change the character of a string , as string is immutable
console.log(ch);
 




