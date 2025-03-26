// localStorage.setItem("username","akash")
// localStorage.setItem("userage","21")
// localStorage.setItem("usercontact","895964")

// // username is key and akash is value 


// let name=localStorage.getItem("username")
// // data access karne ke liye key name likhte hai 
// console.log(name);


// let contact=localStorage.getItem("usercontact")

// console.log(contact);


// localStorage.removeItem("userage")


// localStorage.clear()
// //pura data delete kar dega local storage ka

let ob = {
    name:"akash",age:21,contact:46457568
}

localStorage.setItem("userdata",JSON.stringify(ob))

let dat= localStorage.getItem("userdata")
console.log(dat);

// JSON.parse use karte hai string ko object me convert karta hai
let user= JSON.parse(localStorage.getItem("userdata"))
//user ek object ban gaya hai isiliye object jaise work karega key name degakar particular cheej access kar sakte hai
console.log(user.name);
//JSON.stringify(ob use kara hai object ko string me convert karne ke liye kyu ki //
// local storge ka type string hota hai string bina data show nahi hoga)

