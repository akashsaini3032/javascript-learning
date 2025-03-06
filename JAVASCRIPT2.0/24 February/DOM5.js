let celement = document.createElement('h1')
celement.textContent = "Well Done"
let bd = document.body
bd.append(celement)

let elementh2=document.createElement('h2')
elementh2.textContent = "Second element by js"
bd.append(elementh2)
// body targetted hai  lt bd= document.body se toh awapis ye lne nhi likhenge

bd.setAttribute('bgcolor' , 'yellow')
celement.setAttribute('align' , 'center')

celement.setAttribute('style', 'background-color:blue; color:white')
//attribute name and 2 values
let h = document.getElementById('head') // element mein target krenge  
h.removeAttribute('style') //fir remove krenge