// strings are used to stroe and manipulates texts
// The string object is used to represent and manipulate a sequence of chracter

// syntax:
// creating string  using literal
let namee="raushan";
let location='patna';
let chracter='A';

let sentence=`My name is ${namee}
              i have done 'b.tech' in "cs" branch 
              learning javascript`; 

//Note: Backstics allow us to store multiline sentences with single quote , double, quote and variable using ${} as well



// escape sequence character
let es='this is my father \' s car ' // we can use single quote using backslash inside a single quote sting
console.log(es);

// simmilarlrly we can use single qupte inside double quote. ex= let st="ram's car"

// other escape sequence chracter
// \n : New line
// \t: tab
// \r : carriage return

// sting can be created using single quote, double quote and backtics
console.log(sentence); // this will print entire senteces with given spaces 
console.log(chracter); // output: A
console.log(location); // output: patna
console.log(namee);  // output: raushan
console.log(typeof(namee)); // output: string

// Another way of creating a string using string object
let message=new String("hello");
console.log(message); // output: [String: 'hello']
console.log(typeof(message)); // output: object


// interpolation

let a=10;
let b=15;
let c= a+b;

// first way seprated string and variable using coumma
console.log("sum of", a, "and", b, "=", c);

// second way is concatination
console.log("sum of " + a + " and " + b + " = " + c);

// Third way using backtics
console.log(`sum of ${a} and ${b} = ${c}`)


//------------------------------------------------------------------------------------------------

// Importants Inbuilt string properties and functions
// These functions and properties  are inbuit,  and we can use these function to manipulate with string.

let word1="I love javascript"
let word2="programming";

// 1.) length - is an inbuilt string property , which is used to find total number of chracters in a string.
console.log(word1.length); // output: 17 , spaces are alse counted as a chracter
console.log(word2.length); // output: 11

// 2.) concat() - is an inbuilt string function, which is used to concat/ add two or more strings in one.
let word3=word1.concat(" ",word2);
console.log(word3); // output: I love javascript programming

// another way to concat using '+' operator
let word4=word1+" " + word2;
console.log(word4); // output: I love javascript programming

// 3.) charAt(index) - is an inbuilt string function, which is used to find out a character at a particular index.
// index start 0 in JS.
console.log(word1.charAt(5)); // output: e
// note if we give any invalid index, then it will print blanck

// 4.) indexOf(character) - opposite to charAt, in ths we can find out index of any given character of string
// it returns the index of first occurence of given character, in acse of duplicate character in a string
console.log(word2.indexOf('m')); // output:6

// 5.) lastIndexOf() - same as index of but it gives last occurance index in case of duplicate.
console.log(word2.lastIndexOf('m')); // output:7

// 6.) toUpperCase() - It converts the all sring character into Uppercase
console.log(word1.toUpperCase());

// 7.) toLowerCase() - It converts all the string chracter in lowercase
console.log(word3.toLowerCase());

// 8.) substring(start,end) -It returns the sub-strings of given range in a string.
//     slice(start,index)
// start index is included, whereas end index is excluded
 console.log(word1.substring(3,10)); // output: ove jav , i.e printing strings from index 3 to 9
 console.log(word2.substring(3)); // it will print entire strings from index 3
 console.log(word1.slice(3,10));

// 9.) startsWith(string) - it checks that a string is starts with given character/string or not
// return true, if a string starts with given chracter otherwise return false
console.log(word1.startsWith("I")); // true
console.log(word1.startsWith("I love java" )); // true
console.log(word1.startsWith("java" )); // false


// 10.) endsWith(string) - It checks that a string is ending with the given character/string or not
console.log(word2.endsWith("g"));
console.log(word1.endsWith("javascript"));

// 11.) split(expression) - It generally spilits/breaks all the strins accordig to given expressions
let sp=word1.split(" " );
console.log(sp);  // output: [ 'I', 'love', 'javascript' ]
console.log(typeof(sp)); // output: object
console.log(sp[1]);

// 12.) trim() - It removes the white spaces from back and front of a string
// trimEnd() - removes white spaces from end
// trimStart - It removes white spaces from start

let new_word="        i love you     ";
console.log(new_word); // prints strings with white spaces
console.log(new_word.length) // output:23

let new_word1=new_word.trim();
console.log(new_word1); // print srring without any white spaces
console.log(new_word1.length) // output:10

//13.) replace(string,string) - It can replace a string/ substring with given string/substring
// it does not change the original value
// it replace first occurrence of given string
// replaceAll() - it will replace all the occurence og the  string
let str="I love Raushan Raushan"
let str1=str.replaceAll("Raushan","Kaushal");
console.log(str); // output: I love Raushan
console.log(str1); // output: I love kaushal

// 14.) Note: Strings are immutable, mean's we can;t update string chracter. 
// Inorder to accsess character of string we can use folloing syntax
let s="Raushan"
console.log(s);
console.log(s[1]);


// 15.) includes(search, starrt index) -
//The includes() method returns true if a string contains a specified string.
// Otherwise it returns false.
// The includes() method is case sensitive.
let text = "Hello world, welcome to the universe.";
let result = text.includes("world",0);
console.log(result); // true

// 16.) at(index)
// The at() method returns an indexed character from a string.
// The at() method returns the same as [].
console.log(text.at(2));

// 17.)charCodeAt()- method returns the Unicode of the character at a specified index (position) in a string.
console.log(text.charCodeAt(0)); // output:72

// 18.) repeat(no.of times)
// The repeat() method returns a string with a number of copies of a string.
// The repeat() method returns a new string.
// The repeat() method does not change the original string
let copy=text.repeat(2) // the text string will be copied into 2 times copy variable
console.log(copy);

// 19.) search()-
// The search() method matches a string against a regular expression **
// The search() method returns the index (position) of the first match.
// The search() method returns -1 if no match is found.
// The search() method is case sensitive

let text1="hello world"
console.log(text1.search("hello"));

// 20.) localeCompare()-
// The localeCompare() method compares two strings in the current locale.
// The localeCompare() method returns sort order -1, 1, or 0 (for before, after, or equal).
// The current locale is based on the language settings of the browser.
let t1='ab';
let t2='cd';
console.log(t1.localeCompare(t2)); // output:-1 , becuse t1<t2

//21.) valueOf()
// The valueOf() method returns the primitive value of a string.
// The valueOf() method does not change the original string.
// The valueOf() method can be used to convert a string object into a string.
let t3="raushan";
console.log(t3.valueOf()) // output: raushan
