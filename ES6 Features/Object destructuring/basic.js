/* Refered in google browser - website - MDN WEB DOCS  */

/* Object destructuring - If i want to read object properties as variables then only method we use is object destrycturing */    

let e_name = { id: 100, mail: "prabhu@gmail.com", Gender: "male", Age: 25 }

let {id, mail, Gender,Age } = e_name

// Declare the object name  which is property name on the left hand side = Source variable (e_name)
// is equivalent to 
// let id = e_name.id
// let mail = e_name.mail
// let Gender = e_name.Gender
// let Age = e_name.Age  
// if we give the statement console.log(mail), we will get e_name.mail which is prabhu@gmail.com (Property value)

console.log(mail)
console.log(id,Age,Gender)
let new_e_name = []

new_e_name.push(mail,id,Age,Gender)
console.log(new_e_name)

