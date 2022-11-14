// Promise.all -  it will provide the data when all the promises finished


let cleantheroom = ()=>{
    return new Promise ((resolve,reject)=>{
        resolve("Room is cleaned")
    })

}


// The Promise.all() method takes an iterable of promises as input and returns a single Promise.
 // This returned promise fulfills when all of the input's promises fulfill (including when an empty iterable is passed)
 // , with an array of the fulfillment values. It rejects when any of the input's promises rejects, with this first rejection reason.

let removethegarbage = ()=>{
    return new Promise((resolve,reject)=>{resolve(" Garbage is removed")})

}

let wintheicecream = ()=>{
    return new Promise((resolve,reject)=>{resolve(" Won the Ice Cream")})
}


Promise.all([cleantheroom(),removethegarbage(),wintheicecream()]).then((result)=>{console.log(result)})
Promise.all([cleantheroom(),removethegarbage(),wintheicecream()]).then(()=>{console.log("All Finished")})