let students=[
    {
        name:"sid",
        age:25,
        city:"Bhopal"
    },{
        name:"zaid",
        age:22,
        city:"Indore"

    },{
        name:"jk",
        age:23,
        city:"ujjain"
    },{
        name:"viplove",
        age:20,
        city:"Bhopal"
    }
]

console.log(students[1].name) //sirf ek ka hi chahiye to
//array object print nahi hota home screen pe sirf inke element print hota hai
//data element print ho jata hai

let display=document.querySelector("#ak")
students.map((e)=>{
    display.innerHTML+=`
    <div>
    <h1> Name:- ${e.name}</h1>
    <h2> Age:- ${e.age}</h2>
    <h3> city:- ${e.city} </h3>

    </div>

    
    `
   
})