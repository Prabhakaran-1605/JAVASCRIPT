// forEach method  ---  [].forEach()  --- Iterating the array and executes the provided function and returns undefined

let names = ["rahul", "prabhakar", "gopi","venkat"]

let new_names = names.forEach((name) => {return name.toLocaleUpperCase()})
console.log(names)
console.log(new_names)                           // output will be Undefined.