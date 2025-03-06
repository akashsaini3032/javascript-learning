function okk(){
    let inpname=document.querySelector("#name").value;
    let inpemail=document.querySelector("#email").value;

    let errname=document.querySelector("#ername")
    let erremail=document.querySelector("#eremail")

    

      if (inpname === "") {
        errname.innerHTML = "Please enter the name";
        errname.style.color = "red";
        let border = document.querySelector(".name");
        border.style.border = "2px solid red";
        
        isValid = false;
      }

    if (inpemail === "") {
        erremail.innerHTML = "Please enter the email";
        erremail.style.color = "red";
        let border = document.querySelector(".email");
        border.style.border = "2px solid red";
    
        isValid = false;
      }
     
      else if (!(inpemail.includes("@") && inpemail.includes(".com"))) {
        erremail.innerHTML = "Please enter a valid email address";
        erremail.style.color = "red";
        isValid = false;
      }

}

