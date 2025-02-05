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

    if (inpname === "") {
        errname.innerHTML = "please enter your name";
        errname.style.color = "red";
        return false;
    }

    if (inpemail === "") {
        erremail.innerHTML = "please enter your email";
        erremail.style.color = "red";
        return false;
    }

    if (inpnum === "") {
        errnum.innerHTML = "please enter your number";
        errnum.style.color = "red";
        return false;
    }

    if (inppass === "") {
        errpass.innerHTML = "please enter your Password";
        errpass.style.color = "red";
        return false;
    }

    if (inpcpass === "") {
        errcpass.innerHTML = "please confirm your Password";
        errcpass.style.color = "red";
        return false;
    }
};
