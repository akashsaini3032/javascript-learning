//main javascript file

// add file import

//import Add from './add.js'   // import with original name
//import and name change

import sum from './add.js'

let summ=sum(6,5)
console.log(summ);


// sub file import


import sub from './sub.js'

let subb=sub(6,5)
console.log(subb);



// Are of circle file import

import {check} from './area.js'

let area=check(3)
console.log(area);



// multiple file import

import {multi as mult} from './multi.js'

let multt=mult(6,7)
console.log(multt)



