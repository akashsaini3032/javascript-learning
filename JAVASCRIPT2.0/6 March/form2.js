function validate(){
    let name=document.querySelector('#name').value
    let email=document.querySelector('#email').value
    let number=document.querySelector('#number').value
    let pass=document.querySelector('#pass').value
    let contact=document.querySelector('#contact').value

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

    else if (!(email.includes('@') && email.includes('.com'))){
        alert("please enter valid email must contain '@' and '.com'")
        document.querySelector('#email').focus()
        return false
    }

    

    else if(number==""){
        let errorage=document.querySelector('#errage')
        errorage.innerHTML="Please Enter Your age"
        document.querySelector('#number').focus()
        return false
    }

    else if(number>100 && number<1){
        let errorage=document.querySelector('#errage')
        errorage.innerHTML="Please Enter Your age between 1to 1oo"
        document.querySelector('#number').focus()
        return false
    }

    else if( isNaN(age)){
        alert("please your age innumber")
        document.querySelector('#number').focus()
        return false
    }


    else if(pass==""){
        let errorpass=document.querySelector('#errpass')
        errorpass.innerHTML="Please Enter Your Password"
        document.querySelector('#pass').focus()
        return false
    }

    else if(!(pass.match(/[!@#$%^&*()_+]/))){
        alert("please enter your password with special character")
        document.querySelector('#pass').focus()
        return false
    }
    

    else if(contact==""){
        let errorcontact=document.querySelector('#errcontact')
        errorcontact.innerHTML="Please Enter Your contact"
        document.querySelector('#contact').focus()
        return false
    }

    else if(contact.length>10 || contact.length<10){

        alert("Please Enter Your contact in 10 digit")
        document.querySelector('#contact').focus()
        return false

    }

    



}


