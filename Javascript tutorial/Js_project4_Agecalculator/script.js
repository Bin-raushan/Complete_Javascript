const calculateAge=()=>{
    let d=document.getElementById("day").value;
    let m=document.getElementById("month").value;
    let y=document.getElementById("year").value;
    let dob=new Date(`${d}:${m}:${y}`);
    let yr=dob.getFullYear();
    let dt=new Date();
    let curr_yr=dt.getFullYear();
    let age=curr_yr-yr;
    // alert(`your age is :${age}`);

    let divElement=document.createElement("h2");
    let text=document.createTextNode(`your age is :${age}`);
    divElement.appendChild(text);
    let main=document.getElementById("con");
    main.appendChild(divElement);



}