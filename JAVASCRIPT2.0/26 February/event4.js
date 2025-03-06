let vl = 0
function inc(){
    let ct = document.getElementById('counter')
    vl++
    ct.textContent=vl // jab value badh jayegi vl++ se toh ct ke textcontent mein dikh jaegi
}
function dec(){
    if(vl!=0){
        let ct = document.getElementById('counter')
        vl--
        ct.textContent = vl
    }
    else{
        alert("not less than 0")
    }
}
