// let a=20;
// document.write("<h1>value of a=" + a + "<\h1>")  // print on document


// 1.) alert():
// use to show any message on document
// let message="Hey! how are you doing";
// window.alert(message);
// alert("message");

// 2.) prompt():
// use to take user input
// let name= prompt("Please, Enter you Name");
// alert("hello " + name);


// 3.) confirm()
// returns true or false
let choice=confirm("Do you want to redirect on google?");
if(choice){
    location.href="https://www.google.com"
}
else{
    alert("not redirected");
}


