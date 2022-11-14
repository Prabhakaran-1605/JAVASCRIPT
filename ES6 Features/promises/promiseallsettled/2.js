// The Promise.allSettled() method takes an iterable of promises as input and returns a single Promise. 
// This returned promise fulfills when all of the input's promises settle (including when an empty iterable is passed), 
// with an array of objects that describe the outcome of each promise.

let promise1 = new Promise (( resolve,reject)=>{resolve("prabhu")})

let promise2 = new Promise (( resolve,reject)=>{resolve("aravind")})

let promise3 = new Promise (( resolve,reject)=>{resolve("sabari")})

let promise4 = new Promise (( resolve,reject)=>{reject (new Error("rejected"));})

let promise5 = 4

Promise.allSettled ([promise1,promise2,promise3,promise4,promise5]).then((value)=>{console.log(value)})