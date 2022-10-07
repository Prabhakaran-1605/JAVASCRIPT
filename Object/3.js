let a = {
    id:123,
    name:'prabhakaran',
    age:27
}
console.log(Object.keys(a));    
// Object  - O will be caps otherwise we wont get an output 
// [ 'id', 'name', 'age' ] will print

console.log(Object.keys(a).length);   
// 3 will print
if(Object.keys(a).length>0)
{
    console.log("Not Empty");
}
else
{
    console.log("Empty");
}

// will print Not Empty as output