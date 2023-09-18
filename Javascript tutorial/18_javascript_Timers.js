// Javascript Timer
// We can set delay time to perform any action
// we can set an interval of time to perform any action on that set interval repeatedly.

// 1.) setTimeout(function, delay_time in ms) :-> Execute code after a delay
// 2.) setInterval(function, interval_time in ms) :-> Execute code at regular Interval
// 3.) clearInterval() :-> it stops the set interval time
// 4.) clearTimeout(): :-> it clears the delay


function myCode(){
    console.log("hey i will execute after given time..")
    console.log("how are you? ")
}

// 1 second=1000 milisecond

let timer;
let timerT;
const start=()=>{
    // we have to start.. after 5 second
    timerT=setTimeout(myCode,5000) // it will call mycode function after 5 ssecond 

  
}

function repeat(){
    timer=setInterval(myCode,2000); // it will call mycode function repeatedly after 2 second
}

function stop(){
    clearInterval(timer);
    clearTimeout(timerT)

}