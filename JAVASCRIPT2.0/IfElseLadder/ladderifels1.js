let mt=parseInt(prompt("Enter 1st subject marks"))
let eng=parseInt(prompt("Enter 2nd subject marks"))
let hindi=parseInt(prompt("Enter 3rd subject marks"))
per=(mt+eng+hindi/300)*100
if(per>90)
{
    console.log("Grade A")
}
else if(per>=75 && per<90)
{
    console.log("Grade B")
}
else if(per>=60 && per<75)
{
    console.log("Grade C")
}
else{
    console.log("Fail bhaago yaha se")
}