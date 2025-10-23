let time= new Date() // bina new ke date likhenge to answer milega but string form me
//  new laga denge to object form me
console.log(time);

console.log(time.getFullYear());

console.log(time.getMonth());
console.log(time.getDay());
console.log(time.getHours());
console.log(time.getMinutes());
console.log(time.getSeconds());
console.log(time.getMilliseconds());

let arr=["sun","mon","tue","wed","thus","fri","satur",]
//console.log(arr[1]);
console.log(arr[time.getDay()]);





let showtime=document.querySelector("#show")

setInterval(() => {
  let time=new Date()
        
showtime.innerHTML=` ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
        
    // }, 1000);
