function game() {

    
    let value = prompt("guess your number")

    if(value==10){
        alert("you won")
        return 0;
        
    }
    
    else if(value>10){
        alert("too high")
        

  }

  else if (value<10)
  {
    alert("too low")
    

}

else  
    {
      alert("you lost")
      return 0;
  
  }
  

}