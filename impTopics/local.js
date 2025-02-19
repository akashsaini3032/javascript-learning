let signup=()=>{
    let signname=document.querySelector("#signupname").value
    let signnum=document.querySelector("#signupnum").value
    let signemail=document.querySelector("#signupemail").value
    let signpass=document.querySelector("#signuppass").value

    let errname=document.querySelector("#errname")

    if(signname==""){
        errname.innerHTML="Please Enter Your Name Here"
        return flase
    }

    localStorage.setItem("Name",signname)
    localStorage.setItem("Number",signnum)
    localStorage.setItem("Email",signemail)
    localStorage.setItem("Password",signpass)

    location.href="locallogin.html"
    return false
}

let login=()=>{
    let loginname=document.querySelector("#loginname").value
    let loginpass=document.querySelector("#loginpass").value

    let localname=localStorage.getItem("Name")
    let localpass=localStorage.getItem("Password")

    if(loginname==localname && loginpass==localpass){
        location.href="localhome.html"
    }

    else{
        alert("invalid username and password")
    }

    return false
}

let logout=()=>{
    localStorage.clear()
}