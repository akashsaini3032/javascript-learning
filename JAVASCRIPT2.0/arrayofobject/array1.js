let arr=[
    {
        name:"akash",
        attendence:"kabhi kabhi",
        productivity:"nahi",
        age:20

    },{
        name:"saini",
        attendence:"kabhi kabhi",
        productivity:"nahi",
        age:25
    },{
        name:"abhay",
        attendence:"kabhi kabhi",
        productivity:"nahi",
        age:45
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


// filter
// data  ko filter karna condition ke according 
//new array dega


let fl= arr.filter((e)=>{return e.age>23})

console.log(fl);
