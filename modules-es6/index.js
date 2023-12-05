// 13:44 add na math ,bardziej adekwatne dla 2-ch funkcji
// const add = require('./math')


// 17:02 dostep do pojedynczych obiektow



/* console.log('add():',add());
a = add(2,5,3);
console.log(a); */

// console.log(add);
// console.log(add(2,2,3));

// 13:51 node:4.1
// start value = 0
// >>>>>>>>> 2 sposob < 15:00
//!add and !multiply !math=!math dziala tylko dla:
// const math = require('./math') <=brak error
/* \Desktop\node\modules\index.js:21
console.log(math.add(3,4,5));
            ^

ReferenceError: math is not defined */

// console.log(math.add(3,4,5));
// console.log(math.multiply(3,4,2));
//>>>>>>>>>>> 2 sposob end

// start value = 1 /=0 ERROR ALL * 0/



// 17:02 dostep do pojedynczych obiektow
// const add = require('./math').add;
//>>>>>>>>> 3 sposob
// !add=!mat!add

/* const add = require('./math').add;
const multiply = require('./math').multiply;
console.log(add(3,4,2));
console.log(multiply(3,4,2)); */

// >>>>>>>>>> 4 sposob najlepszy:
// przenosimy do mathFolder/index.js 

// 753 i 755 opis v node: 4 24:50

console.log(add(3,4,2));
console.log(multiply(3,4,2)); 

// >>>>>>>>>> 4 sposob najlepszy: