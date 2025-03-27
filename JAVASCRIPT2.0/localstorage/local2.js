let signup=()=>{
    let signname=document.querySelector("#name").value
    let signage=document.querySelector("#age").value
    let signnum=document.querySelector("#contact").value
    
    
    let errname = document.querySelector("#errname");
    let errage=document.querySelector("#errage")
    let errnum = document.querySelector("#errcontact");
    


    if(signname==""){
        errname.innerHTML="Please Enter Your Name Here"
        errname.style.color = "red";
        return false
    }


    else if(signage === "") {
        errage.innerHTML = "Please enter the number";
        errage.style.color = "red";
        return false
      }

    // contact validation
    else if(signnum === "") {
        errnum.innerHTML = "Please enter the number";
        errnum.style.color = "red";
        return false
      }
    
       else if (isNaN(signnum)) {
        errnum.innerHTML = "Please enter a valid number";
        errnum.style.color = "red";
        return false
      }
    
       else if (signnum.length !== 10) {
        errnum.innerHTML = "Please enter a valid phone number (10 digits)";
        errnum.style.color = "red";
        return false
      }

      

    localStorage.setItem("Name",signname)
    localStorage.setItem("Age",signage)
    localStorage.setItem("Contact",signnum)

    let localname = localStorage.getItem("Name");
    let localage = localStorage.getItem("Age");
    let localcontact = localStorage.getItem("Contact");

    // local storage ki value object me dalenge
let ob = {
    name: localname,
    age: localage,
    contact: localcontact
};


console.log(ob);

localStorage.setItem("userdata",JSON.stringify(ob))

let data= localStorage.getItem("userdata")
console.log(data);


let user= JSON.parse(localStorage.getItem("userdata"))

console.log(user);

    

    
    return false
}









