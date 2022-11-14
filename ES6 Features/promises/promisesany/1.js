/* The Promise.any() method takes an iterable of promises as input and returns a single Promise.
 This returned promise fulfills when any of the input's promises fulfills, with this first fulfillment value. 
 It rejects when all of the input's promises reject (including when an empty iterable is passed),
  with an AggregateError containing an array of rejection reasons.
 */

let promise1 = new Promise((resolve,reject)=>{setTimeout(()=>{resolve("Prabhuji")},4000)})

let promise2 = new Promise((resolve,reject)=>{(setTimeout(()=>{resolve("Aravind"),3000}))})



Promise.any ([promise1,promise2]).then((value)=>{console.log(value)})