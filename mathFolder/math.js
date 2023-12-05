// this is lokalny moduł
function add (...numbers) {
    // console.log("🚀 ~ file: index.js:2 ~ add ~ numbers:", numbers)
       let sum = 0;
       for (number of numbers) {  
            sum += number;
        }
     return sum;
    }

    function multiply (...numbers) {
        // console.log("🚀 ~ file: math.js:16 ~ multiply ~ multiply:", multiply)
         // 14:38 error don't *0
        // let product = 0;
        let product = 1;
            for (number of numbers) {  
                // product += number;
                product *= number;
            }
            return product;
        }
    // 15:35 EXPORT: 1 linia za dwie:

    /* module.exports.add = add;
    module.exports.multiply = multiply; */
        // 16:19 node: 4 obiekt JSON JS akceptuje brak ostatniego ','
    //15:53 3 sposob dla wielu funkcji w math obiekt biblioteka do wyeksportowania z modulu
    
        module.exports = {
        add: add,
        multiply: multiply
    }