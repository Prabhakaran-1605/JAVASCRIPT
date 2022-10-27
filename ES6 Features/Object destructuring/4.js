
let [a=1] = []

console.log(a)

let {b=2} = {b:undefined}        // for undefined assigned value will come which is 2
console.log(b)

let {c=3} = {c:null}             // for null assigned value will not come output will be null
console.log(c)


const { d = console.log("hey") } = { d: undefined };

const { e = console.log("hey") } = { e: 2 };       // e is defined as 2 already so we don't get hey as output for this code
console.log(e)                                      // when we console 'e' we get 2 as output 
