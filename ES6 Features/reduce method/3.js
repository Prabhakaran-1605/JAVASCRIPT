/* 
Sum of values in an object array
To sum up the values contained in an array of objects, you must supply an initialValue, so that each item passes through your function.
*/

let total_Price = [{ price: 500, id: 'p101' }, { price: 1500, id: 'p103' }, { price: 2500, id: 'p103' }].reduce((a, b) => 
{   
    return a + b.price
},0)
console.log(total_Price)