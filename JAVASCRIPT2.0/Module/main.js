//main files
//yah files html me connect hoga




// default ke liye default keyword use karte hai
//named ke liye {} curly braces use karenge


// yah default import ka example hai

// import Add from './fun1.js'

// let answer=Add(12,5)
// console.log(answer);


// yah named import ka example hai

// agar Add as sum likh denge to sum add ka nickname ban jayega phir sum name se bhi use kar sakte hai kahi bhi 
// sirf import ke time me copy bana sakte hai hai export ke time me nahi kar sakte hai name change karna matlab copy banana
//import {Add,sub} from './fun1.js'

import {Add as Sum,sub} from './fun1.js'

// default me kaise function ka name change karenge
import sum from './fun1.js' // sum actually Add hai
// isme direct name change kardo kuch aur karne ki jarurat nahi hai

let answer=Add(12,7)
console.log(answer);

let ans=Sum(50,7)
console.log(ans);

let sn1=sub(30,9)
console.log(sn1);