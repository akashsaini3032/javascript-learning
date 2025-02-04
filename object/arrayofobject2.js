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