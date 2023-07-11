// Javascript is an object based language
// A javascript object is just a collection of key value pairs.

// creating an object
/*synatax:
let object={
    key1:value1,
    key2:value2,
    .      .
    .      .
    keyn:valuen
}
*/

let student={
    name:"Raushan",
    roll:58,
    class:"cse",
    "last name":"Roy"
};
// student is an object which keys are: name, roll, class and values are: Raushan, 58, cse
console.log(student); // prints entire elements of objec

// objects can also have function inside
let student1={
    name:"abhishek",
    roll:65,
    class:"ece",
    display: function(){
        console.log(this.name+" is present");
    }
}
console.log(student1);



// accessing the properties/elements of an object:
// object[key]; 
// object.key;
console.log(student.name);
console.log(student.class);
// student1.display();
student1["display"]();

// note: console.log(student.last name); error

console.log(student["roll"]);
console.log(student1["roll"]);
console.log(student["last name"]); 


// changing/updating the object property
student.name="Kaushal";
student["last name"]="Kumar";
console.log(student);



// Adding the propertes/elements in an object dynamically
student.email="royr@gamil.com";
student["address"]="patna";
console.log(student);


// deleting object property dynamically;
delete student.address;
delete student["last name"];
console.log(student);



// accessing object property using loops

// 1.) for in loop : -> it is used to get keys of an object
for(i in student){
    console.log(i + ":" + student[i]);
}

