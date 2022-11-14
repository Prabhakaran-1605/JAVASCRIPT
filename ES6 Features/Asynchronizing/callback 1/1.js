/* callbackfunction - At the time of invoking we are passing one function as an argument */

let sum = (a,b) =>
{
return a + b;
}

let multi = (a,b) =>
{
return a*b
}

let calc = (a,b,callbackfunction) =>
{
return callbackfunction()
}
let a1 = calc(10,20,sum)
console.log(a1)
let a2 = calc(10,20,multi)
console.log(a2)
let a3 = calc(20,20,(a,b)=>{return a-b})
console.log(a3)