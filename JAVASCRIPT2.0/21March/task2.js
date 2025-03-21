let count=0
function fun(){
if(count<4)
{
    let inp = document.createElement('input')
    let bd=document.body
    bd.append(inp)
    count++
}
else{
    alert("no more")
}
}

