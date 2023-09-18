const getTime=()=>{
    let d=new Date()
    // console.log(d);
    // let h=d.getHours();
    // let m=d.getMinutes();
    // let s=d.getSeconds();
    // return `${h}:${m}:${s}`;
    return d.toLocaleTimeString();
   
};


function myTime(){
    let clockOb=document.querySelector(".clock");
    clockOb.innerHTML=getTime();

}


let timer;
const start=()=>{
   timer=setInterval(myTime,1000);
};

const stop=()=>{
    clearInterval(timer);
}