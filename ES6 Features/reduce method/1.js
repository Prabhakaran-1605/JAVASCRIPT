/* The reduce() method executes a reducer function for array element.

The reduce() method returns a single value: the function's accumulated result.

The reduce() method does not execute the function for empty array elements.

The reduce() method does not change the original array. */


let score = [10,20,30,40,50]
let new_score = score.reduce((a,b)=>{ 
    return a+b
})
console.log(new_score)

