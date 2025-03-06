//setInterval(()=>{document.write("hello")},2000)


//let count=0;
//setInterval(()=>{document.write("count++")},2000)

let st

let ct =0
function fun (){
    let h=document.querySelector("#count")
    st=setInterval(()=>{
        h.innerHTML=ct++
    },500)
}

function stop(){
    clearInterval(st)
}