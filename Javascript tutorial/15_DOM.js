// Document object model (DOM) :
// 1.) Platform and language independent model to represent the HTML or XML object.
// 2.) It defines the logical structure of the documents and the way in which they can be accessed and manipulated 
//      by an application program.
// 3.) In the DOM all parts of the document, such as elements, attributes and text e.t.c are organized in a 
//     Hierarchical tree-like structure
//4.) IN DOM terminology these individuals parts of the documents are called nodes.
//  example: in our HTML Page, Head, body, h1 e.t.c are nodes

/*   
   DOM TREE: Every HTML page can be represent as DOM tree

              Document(Root node)
                        |
                      <HTML>(parent)
                        |
        ------------------------------------
        |                                  | 
      <Head> (child)                    <Body> (child)
        |                                  |
    <title>                         ---------------------- 
                                    |                     |
                                   <h1>                  <ul>
                                    |                     |
                                Raushan (content)        <li>
                                                           |
                                                          Home(content)
                                                           
                                                          
*/
// DOM represents html nodes/elements as an objects, So that we can manipulate each html elements data dynamically.
// A text node is always the leaf of the tree.


//-----------------------------------------------------------------------------------------------------------------

// Javascript DOM Selectors

// How to select any html element?, so that we can manipulte with that element dynamically with the help of JS.
// Suppose, if we want to change the content of h1 tags, then we need to fetch the object of that H1 tags,
// so that we can get proerties and methods and we can change it easily.

// 1.) Selecting top most element of HtMl
let ht=document.documentElement;
console.log(ht);  // all html elements get fetched

let hd=document.head;
console.log(hd);  //all head elements get fetched

let bd=document.body;
console.log(bd);  // all body elements get fetched

// note: document.body(), can return null sometimes if you set javascript before the body tag

let ti=document.title;
console.log(ti);


// 2.) ID selector :-> selecting html element by Id.
// getElementById("id_name") :-it return single object which id="id_name"
let el=document.getElementById("id_selector"); // return object of that elemnet which id=id_selector
console.log(el); 

// we can change the property of selected object

// innerHtml() property : it cahnges the written text inside any html element
el.innerHTML="changed text dynamically";

// style() method: it can change the style of the selected html element
el.style.color='red'; // changed contents colour to red dynamically
el.style.backgroundColor="pink"; // background changed to pink



//3.) class selectors :-> selecting Html elements by class
// getElementsByClassName("class_name") : it returns all the objects which class="class_name";
let ele=document.getElementsByClassName("class_selector");
// console.log(ele);
// console.log(typeof(ele)) // object (array)
for(element of ele){
    console.log(element);
    element.style.color="red";
}

ele[0].style.backgroundColor="yellow"; // we can target individuals 


// 4.) tag selector :-> selecting html elements by tags
// getElementsByTagName("tag_name") : it returns all the objects of that tags
let elem=document.getElementsByTagName("p");
console.log(elem);
for(el of elem){
    console.log(el);
    el.style.color="blue";
}


// 5.) name selector :->selecting Html elements by name
//
let nm=document.getElementsByName("name1");
// console.log(nm);
for(n of nm){
    console.log(n);
    n.style.color="pink";
}



// 6.) CSS selector:
// selecting elements with the help of css selector
//querySelector :-> Return single element,in case of many elements it will return the first element of that selector
//querySelectorAll :-> Returns all the list of elements with that selector
let ob=document.querySelector("#id_selector");  // return element of id="id_selector"
console.log(ob);
ob.style.color="green";

let ob1=document.querySelector(".class_selector"); // return only first element of class="class_selector"
console.log(ob1);
ob1.style.backgroundColor="yellow";


let obs=document.querySelectorAll(".class_selector");
console.log(obs);
obs[1].style.color="grey"


// ----------------------------------------------------------------------------------------------------------------

// Dom styling
// applying css property on the html element with javascript
// We can achieve it by style property

// let mainOb=document.getElementById("object");
// mainOb.style.color="white";
// mainOb.style.backgroundColor="black";
// mainOb.style.fontSize="50px";
// mainOb.style.fontFamily="italic";
// mainOb.style.border="2px solid green";
// mainOb.style.padding="5px";


// we can reflect changes on our page clicking a button
let mainOb=document.getElementById("object");
const reflect=()=>{
// mainOb.style.color="white";
// mainOb.style.backgroundColor="black";
// mainOb.style.fontSize="50px";
// mainOb.style.border="2px solid green";
mainOb.style.padding="5px";
document.body.style.background="green";

// applying css property by class
mainOb.className="red";

};

const getInfo=()=>{

  // console.log(mainOb.style.color);
  // console.log(mainOb.style.fontSize);
  // console.log(mainOb.style.border);

  // we can get computed style by our browser if we din not set any style, if we use this method on set style
  // then, it return set value.
  let styles=window.getComputedStyle(mainOb);
  console.log(styles.getPropertyValue("color"));
  console.log(styles.getPropertyValue("border"));
};


// -----------------------------------------------------------------------------------------------------------------
// Javascript DOM Get And Set Attributes
// Basically, Attributes gives extra information about the html elements
// example <h1 href="www.google.com" class="link" id="spcial_link" src="abc.jpg">Attributes</h1>
// all given href, src, class, id,  these are attributes of an element
// www.google.com, link, special_link,  abc.jpg these are values of attributes


// How to get and set  the attributes
// getAttribute(attribute) :-> This returns the value of passed attribute, return null if there is no such attribute
// setAttribute(attr,value) :-> This will set the value to the given attribute

let urlOb=document.getElementById("url");
const getAtt=()=>{
  // get attribute
  let attValue=urlOb.getAttribute("href");
  console.log(attValue);
  console.log(urlOb.getAttribute("id"));
  console.log(urlOb.getAttribute("class"));
}

const setAtt=()=>{
  // set attribute
  urlOb.setAttribute("href","https://www.facebook.com");
}

const removeAtt=()=>{
  // remove attribute
  urlOb.removeAttribute("class");
}







