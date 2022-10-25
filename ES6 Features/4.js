// map method  ---  [].map()  --- Iterating the array and executes the provided function and returns the array

let names = ["rahul", "prabhakar", "gopi","venkat"]

let new_names = names.map((name) => {return name.toLocaleUpperCase()})
console.log(names)
console.log(new_names)