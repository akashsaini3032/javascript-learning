let ar1=[1,2,3,45,67,5,89,10,34,76,87]
let part=ar1.slice(1,10)
for(let i=0;i<11;i++)
{
    if(part[i]%2==0)
    {
        console.log(part[i])
    }
}