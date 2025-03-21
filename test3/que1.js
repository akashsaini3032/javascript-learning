ct=0
st



let st=setInterval(function start(){
    
    let no=document.getElementById('counter')
    no.innerHTML=ct++
})

clearInterval(function stop(){
    clearInterval(st)
});



