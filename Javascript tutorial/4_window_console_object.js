// Console objects are used to see ouput on console

// we can prints entire console objects on console using
console.log(console);

// 1.)log() shows informantion on console
console.log("Hey, I am mtrying too print message onconsole");

// 2.)info() shows information on console
console.info("Print information on console");

// 3.)warn() // shows warning on console
console.warn("Hey, This is warning");

// 4.)error() // shows error on console
console.error("Hey, This is error");

// 5.)clear() // it's clear the console
// console.clear();

// 6.)table() // it prints the objects in tabular form
let student={
    name:"Raushan",
    address:"Bihar",
    mobile:"342536456"
}
console.log(student); // prints entire student deatis 
console.log(student.name); // print student name

console.table(student); // prints entire students details in table format

// 7.) asert() // it is used to check codition , if true then no issue, if false then gives error


// Note: Reffer to https://developer.mozilla.org/en-US/docs/Web/API/console  for all console objects



// Window object, BOM, And DOM

// window object:
//  window object represent browser window and provides method to control it.
// it is a global object.
// Window object has three parts: i) DOM, ii.)BOM, iii.)Javascript core
// Some important properties and method of window objects:
// alert(), prompt(), document, confirm(), open(), close(), moveto(), location, history, innerHeight, outerHeight
// we can also use these propert using window.propertyName/method or without writing window.
// ex: window.alert("hi"), window.document.title. prompt("")

// location object :-> can be used to get the current page address and redirect the browser to a new page
// window.location()
// .loction.href // returns the url of the current page
// .location.pathname // return the path and file name of current object
// .location.hostname // return the domain name of the web host
// .location.assign() //loads a new document
// .location.protocol // return the web protocol used (http: or https
// .location.port // retuns number of internet host port


// Hostory object :-> history object contain browser history and used to perform operations with browser history
// history.back()
// history.forward()

// i.) DOM :- Document object model
// DOM represent the page content as html.
// document.body() -> entire body get converted into javascript object
// document.body.style.background="green" -> page backgroung becomes green

// ii.) BOM :- Browser object model
// BOM represents additional object provided by the browser (host enviornment) for
// working with everything except the document
// The function alert/prompt/confirm are also the part of BOM
// location.href="https://www.google.com"; -> this can redirect to page on google.com page


// NOTE: NodeJs Does not support window objects

