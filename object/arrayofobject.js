let text="This is String"
let okk=[2,5,6,7,8]
let obb={name:"Anurag" ,age:25}

let Aoo=[
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


//Map,Filter,foreach
//map pure array me ittirate karta hai return karta hai new array kuch na kuch perform karega jo hum karwYWNGE purane array me chNGE NAHI karta

let arr1=[4,7,9,2,5,7,6]
let ans=arr1.map((e)=>{    //e mean event (e) value e me ayengi map mehtod new array return karega

    return e*2

})

console.log(ans);


//other way in this we can remove return or curly bracket{} this is only applicable in only line code
//map and filter me mostly one line code hota hai

let arr2=[4,7,9,2,5,7,6]
let ans2=arr1.map((e)=>    //e mean event (e) value e me ayengi map mehtod new array return karega

     e*2
)

console.log(ans2);


let arr3=arr1.filter((n)=>{
    return n%2==0
})

console.log(ans2);



//for each array nahi string dega

arr1=forEach((e)=>{
    console.log(e)(e*2);
} )

