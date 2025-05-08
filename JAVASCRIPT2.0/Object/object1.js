// let emp={
//     emp_name: "akash",emp_age:"30",emp_contact:3534534
// }

//yah object hai
let emp={
     emp_name: "akash", //emp-name key name hai aur akash value hai
     emp_age:"20",
     emp_contact:3534534,
     emp_contact:"ceo",
     //nested object jab data ko sequre rakhna ho

     // yah nested object hai data protection ke liye use hota hai
     emp_account:{
        emp_balance:2000,
        emp_address:"bhopal",
     }
     
     }

     console.log(emp.emp_account.emp_balance); // yah nested object ko print karega isme 
     //object ke andar object pass kar sakte hai  aur . laga laga ke outer object se internal object tak permission lete aayenge


     console.log(emp); // pura object print hoga

     console.log(emp.emp_name); // pura object print nahi hoga . laga ke key name likh denge . lagana jaruri hai tabhi emp object se permission milega access ka