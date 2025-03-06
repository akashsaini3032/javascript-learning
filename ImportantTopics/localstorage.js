let login=()=>{
    let username=document.querySelector("#username").value
    localStorage.setItem("name",username)
    let userage=document.querySelector("#userage").value
    localStorage.setItem("age",userage)
    //localStorage.setItem("name","akash") manual methhod
    //localStorage.setItem("age","22")
    location.reload()
}


let display=document.querySelector("#show")

display.innerHTML=localStorage.getItem("name")

let display2=document.querySelector("#show2")

display2.innerHTML=localStorage.getItem("age")


let logout=()=>{

    localStorage.removeItem("name");
    localStorage.removeItem("age");
    //sab claer karne ke liye pura data
    //localStorage.clear(); yaha pura data delete ho jayega
    location.reload()


}
    

