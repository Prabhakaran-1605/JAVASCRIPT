let cleantheroom = ()=>{
    return new Promise ((resolve,reject)=>{
        resolve("Room is cleaned")
    })

}

let removethegarbage = (message)=>{
    return new Promise((resolve,reject)=>{resolve(message + " Garbage is removed")})

}

let wintheicecream = (message)=>{
    return new Promise((resolve,reject)=>{resolve(message + " Won the Ice Cream")})
}

cleantheroom().then((result)=>
{ return removethegarbage(result)}).then((result)=>
{return wintheicecream(result)}).then((result)=>{console.log(result)})