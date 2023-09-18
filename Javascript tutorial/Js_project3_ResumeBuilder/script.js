// write js here
function addNewWexp(){
    // console.log("adding new work experience area");

    let newArea=document.createElement("textarea");
    newArea.classList.add('form-control');
    newArea.classList.add('workexp');
    newArea.classList.add('mt-2');
    newArea.setAttribute("placeholder","Your Work Experience");
    newArea.setAttribute("rows","3");
    
    let weob=document.getElementById("we")
    let addWorkExpob=document.getElementById("addWorkExp");

    weob.insertBefore(newArea,addWorkExpob);

}

function addNewAq(){
    // console.log("adding new academic qualification area");
    let newArea=document.createElement("textarea");
    newArea.classList.add('form-control');
    newArea.classList.add('aqf');
    newArea.classList.add('mt-2');
    newArea.setAttribute("placeholder","10th, CBSE Board, 75%  (2010-2011)");
    newArea.setAttribute("rows","3");
    
    let aqob=document.getElementById("aq")
    let addAqfob=document.getElementById("addAqf");

    aqob.insertBefore(newArea,addAqfob);
}

function addNewpro(){
    // console.log("adding new academic qualification area");
    let newArea=document.createElement("textarea");
    newArea.classList.add('form-control');
    newArea.classList.add('Projects');
    newArea.classList.add('mt-2');
    newArea.setAttribute("placeholder","Your Projects");
    newArea.setAttribute("rows","3");
    
    let prob=document.getElementById("pr");
    let addProjectob=document.getElementById("addProject");

    prob.insertBefore(newArea,addProjectob);
}

function addNewSkill(){
    // console.log("adding new academic qualification area");
    let newArea=document.createElement("textarea");
    newArea.classList.add('form-control');
    newArea.classList.add('skill');
    newArea.classList.add('mt-2');
    newArea.setAttribute("placeholder","Your Skills");
    
    let skob=document.getElementById("sk");
    let addskillob=document.getElementById("addSkill");

    skob.insertBefore(newArea,addskillob);
}

// deleting New field on hold

// function deleteNewWexp(){
//     // console.log("Deleting field");
//     let delfld=document.getElementById('we');
//     // let delchild=document.getElementsByClassName(".workexp");l
//     delfld.removeChild('textarea');   
// }


// This function is going to generate CV
function generateResume(){
    // console.log("generating CV");
    let nameob=document.getElementById("name").value;
    let nameTob=document.getElementById("nameT1");
    nameTob.innerHTML=nameob;
    // shortcut-method
    document.getElementById("nameT2").innerHTML=nameob;

    //about
    document.getElementById("aboutT").innerHTML=document.getElementById("about").value;
    


    // contact
    let contactob=document.getElementById("contact").value;
    document.getElementById("contactT").innerHTML=contactob;

    //email
    document.getElementById("emailT").innerHTML=document.getElementById("email").value;
    
    // address
    document.getElementById("adressT").innerHTML=document.getElementById("adress").value;

    //social accounts
    document.getElementById("linkedinT").innerHTML=document.getElementById("linkedin").value;
    document.getElementById("githubT").innerHTML=document.getElementById("github").value;
    document.getElementById("othersT").innerHTML=document.getElementById("others").value;

    // career objective
    document.getElementById("objectiveT").innerHTML=document.getElementById("objective").value;

    // work experience
    let wes=document.getElementsByClassName("workexp");
    let strW=" ";
    for(el of wes){
        strW=strW+ `<li> ${el.value} <hr> </li> `;
    }
    document.getElementById("workexpT").innerHTML=strW;

    // academic
    let aes=document.getElementsByClassName("aqf");
    let strAc=" ";
    for(el of aes){
        strAc=strAc+ `<li> ${el.value} <hr> </li> `;
    }
    document.getElementById("aqfT").innerHTML=strAc;

    // projects
    let pros=document.getElementsByClassName("Projects");
    let strPro=" ";
    for(el of pros){
        strPro=strPro+ `<li> ${el.value} <hr> </li> `;
    }
    document.getElementById("projectsT").innerHTML=strPro;

    //skills
    let sk=document.getElementsByClassName("skill");
    let strsk=" ";
    for(el of sk){
        strsk=strsk+ `<li> ${el.value} <hr> </li> `;
    }
    document.getElementById("skillT").innerHTML=strsk;

    //image
    let file=document.getElementById("image").files[0];
    console.log(file);

    let reader=new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.result);

    // set in template

    reader.onloadend=function(){
        document.getElementById("imageT").src=reader.result;

    };
    


    //Toggle both form and template
    document.getElementById("resume-form").style.display="none";
    document.getElementById("resume-template").style.display="block";

}

// Printing Resume
function printResume(){
    // console.log("Printing Resume");
    window.print();

}