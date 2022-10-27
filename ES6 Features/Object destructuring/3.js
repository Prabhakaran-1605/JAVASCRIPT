const numbers = [];
const obj = { a: 1, b: 2 };

// Assignment destructuring - where let, var, const variable is not necessary but () parantheses is mandatory 

({ a: numbers[0], b: numbers[1] } = obj);                 



console.log(numbers) 


 let {a,b} = obj
 console.log(a,b)