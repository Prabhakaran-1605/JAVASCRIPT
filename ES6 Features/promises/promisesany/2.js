/* The Promise.any() method takes an iterable of promises as input and returns a single Promise.
 This returned promise fulfills when any of the input's promises fulfills, with this first fulfillment value. 
 It rejects when all of the input's promises reject (including when an empty iterable is passed),
  with an AggregateError containing an array of rejection reasons.

  The AggregateError object represents an error when several errors need to be wrapped in a single error.
   It is thrown when multiple errors need to be reported by an operation, for example by Promise.any(), 
   when all promises passed to it reject.
 */

  let promise1 = new Promise((resolve,reject)=>{setTimeout(()=>{reject("Prabhuji")},4000)})

  let promise2 = new Promise((resolve,reject)=>{(setTimeout(()=>{reject("Aravind"),3000}))})
  
  let promise3 = new Promise((resolve,reject)=>{reject("")})
  
  Promise.any ([promise1,promise2,promise3]).catch((value)=>{console.log(value)})