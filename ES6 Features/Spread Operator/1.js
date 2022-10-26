// Merging of an array element

let a = [10,30,20,40,{id:100,name:"prabhakar"}]

var b = [30,40,50,50]

let c = [...a,...b]

console.log(c)

// Extending of an array element

var mark = [...a,30,40,50,50]

console.log(mark)

var e = [10,30,[10,[30,[40]]]]

var d = [...e]

console.log( d)

console.log(d[2])