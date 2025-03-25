let arr=[
    {
        name:"akash",
        attendence:"kabhi kabhi",
        productivity:"nahi"

    },{
        name:"saini",
        attendence:"kabhi kabhi",
        productivity:"nahi"
    },{
        name:"abhay",
        attendence:"kabhi kabhi",
        productivity:"nahi"
    }
]

arr.pop({})

arr.push({
        name:"vikah",
        attendence:"kabhi kabhi",
        productivity:"nahi"
})

arr.shift()

arr.unshift({
    name:"anurag",
    attendence:"kabhi kabhi",
    productivity:"nahi"})






console.log(arr);


//map method 

let arrname=arr.map((e)=>{return e.name} )
console.log(arrname);

let arrattendance=arr.map((e)=>{return e.attendence} )
console.log(arrattendance);

let arrproductivity=arr.map((e)=>{return e.productivity} )
console.log(arrproductivity);
