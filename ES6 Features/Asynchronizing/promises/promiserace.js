// Promise.race - One of the promises / any of the promises finished it will provide the data

let cleantheroom = ()=>{
    return new Promise ((resolve,reject)=>{
        resolve("Room is cleaned")
    })

}

let removethegarbage = ()=>{
    return new Promise((resolve,reject)=>{resolve(" Garbage is removed")})

}

let wintheicecream = ()=>{
    return new Promise((resolve,reject)=>{resolve(" Won the Ice Cream")})
}

Promise.race([cleantheroom(),removethegarbage(),wintheicecream()]).then(()=>{console.log("ONE OF THEM FINISHED")})
Promise.race([cleantheroom(),removethegarbage(),wintheicecream()]).then((result)=>{console.log("ONE OF THEM FINISHED "+ result )})