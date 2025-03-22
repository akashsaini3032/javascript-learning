// let ob={
//     name:"Raghav",
//     contact:4565467,
//     obfun: function(){
//         alert("working")
//     },
//     car:["BMW","Audi"]
// }

// ob.obfun()
// //console.log();
// console.log(ob.car[1])






// //spread opertor to merger element of multiple objects
// let ob1={
//     name:"ak",age:90,contact:123
// }

// let ob2={
//     name:"jk",age:90,contact:123
// }

// // existing  object me add karna
// ob2.email="akashsainira@gmail.com"  //yah ob2 me add ho jayega
// // existing object me overwright karna
// ob2.city="indore"


// //koi bhi value delete karna ho to uske key ka name likh do 
// delete ob2.state

// console.log(ob2);




// //two object ko merge kar sakte hai and existing object me add kar sakte hai and existing object ko overwright kar sakte hai

// let ob3={...ob1,...ob2}
// console.log(ob3);


// key find karna 



//isse hum key find karenge object me
let person ={
    name:"jak",
    city:"bpl",
    contact:1232
}

//object for of loop nahi support karta error dega
for(let k in person){
    console.log(k);//aaise sirf key milega
    console.log(person[k]); //aaise value bhi print hoga
}


//object keyword hai O captial rakhna humesha warna nahi chalega
// isse key print hoga
let k= Object.keys(person)
//console.log(k); // isme array ke form me milega arguemnt me iske object ka naam hoga return karke array dega keys
console.log(k[0]); //index isme denge kaun se index ka key chahiye humko

// isse value print hoga

let n= Object.values(person)
//console.log(k); // isme array ke form me milega arguemnt me iske object ka naam hoga return karke array dega values
console.log(k[0]); //index isme denge kaun se index ka value chahiye humko
