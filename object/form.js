let sub = () => {
    let inpname = document.querySelector("#name").value;
    let inpemail = document.querySelector("#email").value;
    let inpnum = document.querySelector("#number").value;
    let inppass = document.querySelector("#pass").value;
    let inpcpass = document.querySelector("#cpass").value;

    let errname = document.querySelector("#errname");
    let erremail = document.querySelector("#erremail");
    let errnum = document.querySelector("#errnum");
    let errpass = document.querySelector("#errpass");
    let errcpass = document.querySelector("#errcpass");

    if (inpname == "") {
        errname.innerHTML = "please enter your name";
        errname.style.color = "red";
        return false;
    }

    else if (inpemail === "") {
        erremail.innerHTML = "please enter your email";
        erremail.style.color = "red";
        return false;
    }

    else if (inpnum === "") {
        errnum.innerHTML = "please enter your number";
        errnum.style.color = "red";
        return false;
    }

    else if (inppass === "") {
        errpass.innerHTML = "please enter your Password";
        errpass.style.color = "red";
        return false;
    }

    else if (inpcpass === "") {
        errcpass.innerHTML = "please confirm your Password";
        errcpass.style.color = "red";
        return false;
    }

    //isNaN  this property is not a number true mean not a number

    else if(!(inpemail.includes("@") && inpemail.includes(".com"))){
        erremail.innerHTML="please enter valid email"
        return false
    }

    else if(isNaN(inpnum) ){ //if number ans will be false
        errnum.innerHTML="Please Enter number only"
        return false

    }

    else if(inpnum.length!=10){
        errnum.innerHTML="Please Enter valid number"
        return false
    }

    //includes check karta hai string me include hai ki nahi
    // ! isiliye lagaya kyu ki include check karta hai yah character hai ki nahi but humko chahiye na ho isiliye aage ! laga diya

    

    else if(inpcpass!=inppass){
        errcpass.innerHTML="please enter same password"
        //inpcpass.value=" "
        //or
        document.querySelector("#cpass").value=""
        element.focus();
        return false
    }
    
    else if(!(inppass.match([/1234567890 /]) && inppass.match([/!@#$%^&*()_+ /]) && inppass.match([/a-z /]) && inppass.match([/A-Z /]))){
        errpass.innerHTML="please enter strong password"

        return false
    }
};
