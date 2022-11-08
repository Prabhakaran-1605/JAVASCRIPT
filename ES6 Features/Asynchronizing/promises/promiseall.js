// Promise.all -  it will provide the data when all the promises finished


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


Promise.all([cleantheroom(),removethegarbage(),wintheicecream()]).then((result)=>{console.log(result)})
Promise.all([cleantheroom(),removethegarbage(),wintheicecream()]).then(()=>{console.log("All Finished")})