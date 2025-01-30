
function zaid(){

//  let show= document.getElementById("text");
let show= document.querySelector('#text')

 show.innerHTML="Hello"
 show.style.color="red"
 show.style.fontSize="40px"    
 //   document.write("Hello")
 // Threee button with bgcolor changed 
//  reset button done 
//  bgimage changed with btn 


}



// --------------------Day 2 -----------------------------


function quee(){

   let imgchange=  document.querySelector("#img")

   imgchange.src="img2.jpeg"

}


function okk(){

//    let box1=  document.querySelector("#box1")
//    let box2=  document.querySelector("#box2")
//    let box3=  document.querySelector("#box3")

//    box1.style.backgroundColor="red"
//    box2.style.backgroundColor="blue"
//    box3.style.backgroundColor="green"



  let box= document.querySelector("#box1")

//    box.style.display="none"

if(box.style.display=="none"){
    box.style.display="block"
}else{

    box.style.display="none"
}


}



let count=0;

function inc(){
   
  let para= document.querySelector("#mypara")
   
   count++; // count=count+1
 
   para.innerHTML=count


}

function dec(){
     
  let para= document.querySelector("#mypara")
   
   count--; // count=count-1
 
   para.innerHTML=count

}




 // Template letrals  ( ` ` )


//  let textt= `HEllo "i" 'am' Sid`   // Supports Single Quotes('') and Double quotes("")

// let textt= `HEllo i
//       am 
//       Sid`                           // Supports Multi line text 


// let textt= `HEllo <h1>i</h1> am Sid`   // Supports html tags

let Name= "Sid" 
let age=25

// let ans= "Hello i am" + Name + "and i am" +age+"years old"
let ans=`Hello i am ${Name} and i am ${age} years old `

document.write(ans);
