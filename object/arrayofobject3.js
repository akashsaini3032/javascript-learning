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

let display=document.querySelector("#dataDisplay")
students.map((e)=>{
    display.innerHTML+=`

    <tr>
    <td id="data">  ${e.name}</td>
    <td>  ${e.age}</td>
    <td>  ${e.city} </td>

    </tr>
    

    
    `
   
})