 function ak(){
    let fullName = prompt("Enter your full name:");

// Convert the full name to uppercase
let upperCaseName = fullName.toUpperCase();

// Find the length of the full name
let nameLength = fullName.length;

// Extract the first name
let firstName = fullName.split(" ")[0];

// Display the results
alert("Uppercase Name: " + upperCaseName);
alert("Length of Name: " + nameLength);
alert("First Name: " + firstName);


 } 
 


/* fullName.split(" ")[0]
  for example akash saini
  split ["akash" "saini"]
  [0] matlab pahli index utha lega 
  "akash" */