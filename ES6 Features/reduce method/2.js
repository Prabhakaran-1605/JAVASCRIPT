let score = [10.2,20.7,30.5,40.6,50.5]
let new_score = score.reduce((a,b)=>{ 
    return a+ Math.round(b)                     // 10.2,21,31,41,51 - 154.2
})
console.log(new_score)


let score1 = [10.2,20.7,30.5,40.6,50.5]
let new_score1 = score1.reduce((a,b)=>{ 
    return a+ b                     // 152.5
})
console.log(new_score1)