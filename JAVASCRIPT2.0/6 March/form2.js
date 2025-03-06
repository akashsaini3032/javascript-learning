function validate(){
    let name=document.querySelector('#name').value
    let email=document.querySelector('#email').value
    let number=document.querySelector('#number').value

    if(name==""){
        let errorname=document.querySelector('#errname')
        errorname.innerHTML="Please Enter Your name"
        document.querySelector('#name').focus()
        return false
    }

    else if(email==""){
        let erroremail=document.querySelector('#erremail')
        erroremail.innerHTML="Please Enter Your email"
        document.querySelector('#email').focus()
        return false
    }

    else if (!(email.includes('@'))){
        alert("please enter valid email must contain '@")
        document.querySelector('#email').focus()
        return false
    }

    else if(number==""){
        let errorage=document.querySelector('#errage')
        errorage.innerHTML="Please Enter Your age"
        document.querySelector('#number').focus()
        return false
    }

    else if( isNaN(age)){
        alert("please your age innumber")
        document.querySelector('#age').focus()
        return false
    }
}