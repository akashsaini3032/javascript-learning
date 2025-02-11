let roll=()=>{
    let dice=Math.floor(Math.random()*6+1);
    if(dice==1){
        box1.style.opacity="1"
        box2.style.opacity="0"
        box3.style.opacity="0"
        box4.style.opacity="0"
        box5.style.opacity="0"
        box6.style.opacity="0"


    }
    else if(dice==2){
        box1.style.opacity="0"
        box2.style.opacity="1"
        box3.style.opacity="0"
        box4.style.opacity="0"
        box5.style.opacity="0"
        box6.style.opacity="0"
        

    }
    else if(dice==3){
        box1.style.opacity="0"
        box2.style.opacity="0"
        box3.style.opacity="1"
        box4.style.opacity="0"
        box5.style.opacity="0"
        box6.style.opacity="0"
        

    }
    else if(dice==4){
        box1.style.opacity="0"
        box2.style.opacity="0"
        box3.style.opacity="0"
        box4.style.opacity="1"
        box5.style.opacity="0"
        box6.style.opacity="0"
        

    }

    else if(dice==5){
        box1.style.opacity="0"
        box2.style.opacity="0"
        box3.style.opacity="0"
        box4.style.opacity="0"
        box5.style.opacity="1"
        box6.style.opacity="0"
        

    }

    else if(dice==6){
        box1.style.opacity="0"
        box2.style.opacity="0"
        box3.style.opacity="0"
        box4.style.opacity="0"
        box5.style.opacity="0"
        box6.style.opacity="1"
        

    }
}
