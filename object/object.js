let te="hello iam sid" //string
let ok=["sid",25,"bhopal"] //Array

//object=key:"value"



let obj={
    name:"sid",
    age:25,
    city:"bhopal"
}

//console.log(ok[1]);

obj.hobby="reading" // isse object ke andar koi cheej add karane ke liye aur yah alphabetical order me hota hai add

console.log(obj); //to see full object

//console.log(obj.age); //to access the object key age


obj.age=26 //isse age upadate ho jayega matlab kisi cheej ko update karne ke liye overwright karna padta hai

delete obj.city // to delete any key and value


//ADVANCE OBJECTS

let ob={
    name:"sid",
    age:25,
    city:"bhopal",
    subject:["reading","writing","coding"],
    greeting: function(){
        //console.log("Hello I am Function")
        console.log(`Hello I am ${this.name}  ${this.age}`)
    }
}

ob.greeting();
//console.log(ob.subject)[1];  //yah hota hai array ke andar ka print karna
