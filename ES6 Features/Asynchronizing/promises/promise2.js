let promisetocleantheroom =  new Promise ( (resolve,reject)=>{                // new keyword is must for a promise 

    // cleaning the room

    let cleaned = true;
    if(cleaned)
    {
        resolve(" Cleaned")
    }
    else{
        reject(" Not cleaned")
    }

})
promisetocleantheroom.then((fromResolve) => {                           // .then is used to fetch resolve data
    console.log("Room is" + fromResolve)
    
}).catch((fromReject) => {                                              // .catch is used to fetch reject data
    console.log("Room is" + fromReject)
});