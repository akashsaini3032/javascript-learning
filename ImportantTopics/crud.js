
//asinc/ await  keyword hai  asynocronic ko synocronic banata hai 
//synocronic jo step by step process hota hai
//asynocronic isme jo pahle done ho jata hai uska output aajata hai


//fetch method data dikhatra hai but promise return karta hai 

//let fetchData= ()=>{
    //let url='http://localhost:3000/hotel' //yah pe data le rahe hai

    //let res=fetch(url) //yaha data access kar rahe 

    //console.log(res);
    //isme pahle puara data ata nahi hai hum pahle hi dikhane ki koshis karte hai
//}

//fetchData()

//by default fetch method ka behaviou hai get karna
//isiliye get likhns jaruri nahi optional hai



//real method



let fetchData= async ()=>{
    let url='http://localhost:3000/hotel' //yah pe data le rahe hai

    let res= await fetch(url) //yaha data access kar rahe 
    let data= await res.json()
    console.log(data);


    //console.log(res);
    //isme pahle puara data ata nahi hai hum pahle hi dikhane ki koshis karte hai
}

fetchData()

