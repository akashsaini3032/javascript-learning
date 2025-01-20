function day() {
    let day = Number(prompt("Enter a number")); 

    switch (day) {
        case 1:
            alert("Monday"); 
            break;
        case 2:
            alert("Tuesday"); 
            break;
        case 3:
            alert("Wednesday"); 
            break;
        case 4:
            alert("thursday"); 
            break;
        case 5:
            alert("friday"); 
            break;
        case 6:
            alert("saturday"); 
            break;
        case 7:
            alert("sunday"); 
            break;
        default:
            alert("Invalid"); 
            break;
    }
}