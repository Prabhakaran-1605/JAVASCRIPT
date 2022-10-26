let names = ["rahul", 'sonia', 'priyanka']


let wish =(name)=>
{
    return name.toLocaleUpperCase()
}
let new_Names = names.map(wish) 

console.log(names)
console.log(new_Names)