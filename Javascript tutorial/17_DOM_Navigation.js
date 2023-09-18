// DOM Navigation
// we can find out the children, siblings if we know the parent node
// simmilarly we can findd the parent node if we know the children node
// so, basically dom navigation means navigating from one node to another

let mainElement=document.getElementById("main");
// first child 
console.log(mainElement.firstChild) // output:#text , if we have given line break or space 
// printing name of first child
// use property nodeName
console.log(mainElement.firstChild.nodeName); // it will return #text, because it considers line break or space also as it's child.

// if we want to print first child element then we can use
console.log(mainElement.firstElementChild);
// name of first child element
let firstChild=mainElement.firstElementChild 
console.log(firstChild.nodeName); // h1
firstChild.innerHTML="hi we are going to change"
firstChild.style.background="red";


// last child element
console.log(mainElement.lastElementChild.nodeName); // p



// all children nodes
// let nodes=mainElement.childNodes;
// for(n of nodes){
//     console.log(n.nodeName);
// }


// all children elements node only
let elementNode=mainElement.children
for(n of  elementNode){
    console.log(n.nodeName);
}



// parent node
let child=document.getElementById("heading");
let parentNode=child.parentElement  
// or parentNode=child.parentNode
console.log(parentNode.nodeName);
//Note: it returns null if no parents exist



// Navigating to siblings node

// previousSibling and nextSibling

let middleElement=document.getElementById("heading1");

let prevSibling=middleElement.previousElementSibling;
console.log(prevSibling.nodeName); // h1


let nextSibling=middleElement.nextElementSibling;
console.log(nextSibling.nodeName); //p


// console.log(middleElement.hasChildNodes()); // true, way to check if chidren exist or not 


// let att=nextSibling.getAttribute("id");
// console.log(att); // para
