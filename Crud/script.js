let fetchData= async()=>{
    let url="http://localhost:3000/carrental"
    let res= await fetch(url, {method:"GET"}) 

    let data= await res.json()

    console.log(data);

    let Show=document.querySelector("#datashow")

    data.map(
        (e)=>{

            Show.innerHTML+=`
    
            <tr>
                <td> ${e.name}</td>
                <td> ${e.age}</td>
                <td> ${e.mobile}</td>
                <td> ${e.person}</td>
                <td> ${e.price}</td>
                <td onclick="del('${e.id}')"> delete </td>
            </tr>
            
            `
        }
    )
}

let del=(id)=>{
    let url=`http://localhost:3000/carrental/${id}`
    fetch(url, {method:"DELETE"}) 

}

fetchData()