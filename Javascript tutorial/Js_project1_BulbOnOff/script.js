
console.log("hello");

let imgOb=document.getElementById("set1");
let turnOn=()=>{
    imgOb.setAttribute("src","./bulbon.png");

};

let turnOff=()=>{
    imgOb.setAttribute("src","./bulboff.png");

};

let toggle=()=>{
    let srcVal=imgOb.getAttribute("src");
    let text=document.getElementById("onOff");
    if(srcVal=="./bulboff.png"){
        turnOn();
        text.innerHTML="OFF";
    }
    else{
        turnOff();
        text.innerHTML="ON";
    }
}