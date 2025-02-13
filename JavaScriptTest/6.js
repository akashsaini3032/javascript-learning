let students=[
    {
        name:"akash",
        age:25,
        city:"Bhopal"
    },{
        name:"abhay",
        age:22,
        city:"Indore"

    },{
        name:"Divyansh",
        age:23,
        city:"ujjain"
    },{
        name:"Amaan",
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