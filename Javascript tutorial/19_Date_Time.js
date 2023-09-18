// JavaScript Date and Time
// Built in Date object allow us to get the local date time by accessing computer system clock through browser
// Date objects provides several method to perform operation with Date and time

// creating a date object
//object is created with the help of constructor
// var d=new Date(); // current date and time taken from compter
// var d=new Date(year,months,day,hour,minutes,seconds,miliseconds)
// var d1=new Date(2021,0,30,14,35,20,50);
// var d2=new Date("30 january 2021");
// var d3=new Date(1517356800000); // miliseconds

// current date and time
var d=new Date();
console.log(d);  // output: 2023-07-17T05:24:52.808Z , prints the current date Time

// several important methods:
console.log(d.toDateString()); // output: Mon Jul 17 2023 , display an abreviated date string
console.log(d.toLocaleDateString()); // output:17/07/2023 , Display a localized date string
console.log(d.toISOString()); // output:2023-07-17T05:30:21.941Z , display the ISO standerized date string
console.log(d.toUTCString()); // output:Mon, 17 Jul 2023 05:31:35 GMT , display the date string converted to UTC Time
console.log(d.toString()); // output:Mon Jul 17 2023 11:03:17 GMT+0530 (India Standard Time)
console.log(d.getDate()) // output:17 returns the date
console.log(d.getDay()); // output 1 , returns the day 1 means monday , sunday-saturday(0-7)
console.log(d.getHours()); // output: 11 ,returns the hours of current time
console.log(d.getMinutes()); // returns the minutes of current time
console.log(d.getFullYear()); // return the year of current date
console.log(d.getMonth()); //output:6, returns the months of current date 6 means july , jan-dec(0-11)
console.log(d.getSeconds()); // returns seconds of current time
console.log(d.getMilliseconds()); // returns miliseconds of current time


// 
var d1=new Date("17 july 2023");
console.log(d1);
