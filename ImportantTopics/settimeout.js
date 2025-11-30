

let runn=()=>{
    setTimeout(()=>{
        console.log("run");
    },3000)
}

let fun=()=>{
    setTimeout(()=>{
        let show=document.querySelector("#text") 
        show.innerHTML="hello bro"
    },3000)
}



// let count=0
// let inter;
//  inter= setInterval(()=>{
//     console.log(count);
//     count++;
// },3000)

// let st=()=>{
//     clearInterval(inter)
// }


let stop = () => {
    let inpnumber = document.querySelector("#number").value;
    let count = inpnumber;

    let inter = setInterval(() => {
        let saw = document.querySelector("#showw");
        saw.innerHTML = count;

        if (count <= 0) {
            clearInterval(inter); // Stop the interval when count reaches zero
        } else {
            count--;
        }
    }, 1000);
}
