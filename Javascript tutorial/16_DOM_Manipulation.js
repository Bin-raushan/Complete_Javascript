// DOM Manipulation:
// We can create element dynamically 
// we can add new created elements in our HTML
// we can remove existing HTML Elements
// We can replace HTML existing html element with other elements


// creating And Adding new Node to HTML

const addNode=()=>{
    // creating a new element/node
    let divElement=document.createElement("div") // new div element created
    // console.log(divElement);

    // creating a text node to add text in creted or existing html element
    let textElement=document.createTextNode("This is a sample Text created");
    // let textElement1=document.createTextNode("This is another sample Text created");


    // adding textNode to divElement
    divElement.appendChild(textElement);  // text added to div element
    // divElement.appendChild(textElement1);  
    // console.log(divElement);


    // adding new created div element to our html as a last child
    let mainElement=document.getElementById("main");
    // console.log(mainElement);
    mainElement.appendChild(divElement); // adding div element to our exsiting html with id main as last child
    // console.log(mainElement);


    // adding adding new created div element to our html as first child
    let first_element=document.getElementById("title");
    mainElement.insertBefore(divElement,title);


    // we can change the text of our html element
    first_element.innerHTML="hello friend! we will learn DOM Mainpulation";
   
}


// removing existing node of HTML

const removeNode=()=>{

    let mainElement=document.getElementById("main");
    let first_element=document.getElementById("title");
    // removing existing html element
    mainElement.removeChild(first_element);

}



// replacing existing html node with other node

const replaceNode=()=>{
    let newElement=document.createElement("h3");
    let text=document.createTextNode("this is replacing text");
    newElement.appendChild(text);
    console.log(newElement);

    let mainElement=document.getElementById("main");
    console.log(mainElement);
    let secondElement=document.getElementById("hint");
    console.log(secondElement);
    mainElement.replaceChild(newElement,secondElement);

}




