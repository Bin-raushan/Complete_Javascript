// Datatype represents that which type of value present into a variable.
// It can be Number, string, boolean etc
// Javascript is a loosely type or dynamically type programming language , we don's need to specify the about datatype.
// ex= let a=1, number datatype
//      let b=10.11. number datatype
//      let c="string" string dataype

// There are two types pf Datatype
// 1.)premitive datatypes (use stack memory) are: 
//     i.)  number = 100, 50, 20.5 e.t.c
//     ii.) string= "ram", 'abc' 
//     iii.)boolean= true/false only
//     iv.) null= nothing
//      v.) undefined= when we don't define any variables it becomes undefined types
//     vi.) symbol

// 2.) Reference datatypes (use heap memory) are: 
 //       i.) array
//        ii.) object
//       iii.) date
//        iv.) function
//        v.) classes, ex: set, map, e.t.c..



// typeof(variable): it checks what type of data present in a variable
// number
let a=100;
console.log(typeof(a));
let b=100.55;
console.log(typeof(b));
// string
let c="ram";
console.log(typeof(c));
let ch='a';
console.log(typeof(ch));

// bolean
let d=true;
let e=false;
console.log(typeof(d));
console.log(typeof(e));

// undefined
let g=undefined;
let h;
console.log(typeof(f));
console.log(typeof(h));


// null : it ia also a special type of object 
let i=null;
console.log(typeof(i)); // it will print object

// reference datatype

// type of all the reference datattype is object

// array
let arr=[1,2,3];
console.log(arr);
console.log(typeof(arr));

// object

let ob={
    name: "ram",
    age: 20,
    address:"kolkata"
}
console.log(ob);
console.log(typeof(ob));

//date
let da=new Date();
console.log(da);
console.log(typeof(da));