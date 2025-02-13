let greeting=[
    {
        name:"akash",
        age:25,
        greet:""
    },
]

let display=document.querySelector("#dataDisplay")
greeting.map((e)=>{
    display.innerHTML+=`

    console.log("hello,my name is ${e.name} and iam ${e.age} years old
    )

    
    `
   
})