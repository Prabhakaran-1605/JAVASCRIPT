// Object is a group of keyvalues or Mapped values
// Group of key value pairs as one entity
// Group of properties (Property name & property value)
// In javascript object - indexing concept is not available
// Iterable operation is not applicable in javascript object
// Duplicate keys are not allowed


// Create

let a = {
    emp_name: 'Prabhakaran',
    id: 1605,
    Posting: "Software Engineer" 
}
// a -- Object     
// emp_name, id, Posting   -- Property Name,  
// 'Prabhakaran', 1605, "Software Engineer" 

//Read

console.log(a);
console.log(a.emp_name);
console.log(a.id);
console.log(a.Posting);

//Update

a.emp_name = "Prabhakaran H B "
a.id = 9788
a.Posting = "Senior Developer"
console.log(a);
console.log(a.emp_name);
console.log(a.id);
console.log(a.Posting);

// Delete

delete a.Posting
console.log(a);