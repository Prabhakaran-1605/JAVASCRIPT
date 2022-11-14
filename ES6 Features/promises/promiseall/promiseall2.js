let promise1 = new Promise ((resolve,reject) => { resolve(1)})

let promise2 = ()=>{return new Promise((resolve,reject)=>{resolve("2")})};

let promise3 = new Promise((resolve,reject)=>{setTimeout(()=>{resolve("3"),2000})})

Promise.all([promise1,promise2(),promise3]).then((values)=>{console.log(values)})