let text="This is String"
let okk=[2,5,6,7,8] //array
let obb={name:"Anurag" ,age:25}

//object key value pair me likha jata hai

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

let arr1=[4,7,9,2,5,7,6] //callback function or hire order function jo map ke andar likhte hai usko call back bolte hai
// jo kisi ke parameter me pass kiya ho use callback function bolte hai ()=>{}
    // aisa function jisne apne parameter me function liya ho use high order function bolte hai
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


//FILTER  yah hume filter provide karwata hai mens jo chahye wahi aayega apna ek filter bana sakte hai
let ans10=arr1.filter((e)=>{
    //return e>4; greatr than 4
    return e%2!=0; //ise odd ayega
})

console.log(ans10);

//mostly map amd filter hi use karte hai
//reurn tab karte hai jab new array chahiye to

//for each array nahi string dega
//isme return bhi nahi likhna padega return nahi dega 
//+ - * % bhi karwa sakte hai

arr1=forEach((e)=>{
    console.log(e)(e*2);
} )

