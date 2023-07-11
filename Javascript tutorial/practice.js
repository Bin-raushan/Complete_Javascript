// reverse a string word wise

let str="I love programming language c and c++ ";
// console.log(str);
let sp=str.split(" ");
// console.log(sp.length);
console.log(str);
let sr="";
for(let i=(sp.length)-1;i>=0;i--){
    sr=sr.concat(" ",sp[i]);


}
console.log(sr.trim());