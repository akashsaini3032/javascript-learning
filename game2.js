function game() {
    let chances = 3; 

    while (chances > 0) {
        let value = prompt("Guess your number (You have " + chances + " chances)");

    
        value = Number(value);

        if (value === 10) {
            alert("You won!");
            return; 
        } else if (value > 10) {
            alert("Too high!");
        } else if (value < 10) {
            alert("Too low!");
        }

        chances--; 
    }


    alert("You lost!");
}