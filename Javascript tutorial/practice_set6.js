// 1.) write a program using prompt function to take input of age as a value from the user 
// use alert to tell him he can drive or not

let user=prompt("Enter your age");
user=parseInt(user);
if(user>18){
    alert("you can drive")
}
else{
    alert("you can not drive")
}

// 2.) in question1 use confirm to ask the user if he want to see the promt again

let choice=confirm("Do you want to see your entered age?");
if(choice){
    alert(user);
}
else{
    alert("thank you");
}



// 3.) In the previous question ,show error on console if age entered by the user is a negative value

if(user<=0){
    console.error("you have entered invalid age");

}


// 4.) write a program to change the url to google.com (redirection) if user enter thhe number>4

let number=prompt("enter the number");
number=parseInt(number);
if(number>4){
    location.href="https://www.google.com";
}


// 5.) // change the background colour of the page based on user input

let color=prompt("Enter the page background color");
document.body.style.background=color;


