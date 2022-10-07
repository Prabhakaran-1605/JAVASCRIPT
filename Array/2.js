
var b = [10,20,40,60,60.5,true,false,undefined,null,{},[]]
b[10]= "Prabhakaran"
console.log(b);
console.log(b[0]);
console.log(b[1])
console.log(b[2]);
console.log(b[3]);
console.log(b[4]);
console.log(b[5]);
console.log(b[6]);
console.log(b[7]);
console.log(b[8]);
console.log(b[9]);
console.log(b[10]);
console.log(b[11]);    // b[11] is not addressed in an array, hence we get output as undefined 
console.log(b.length);  // for b[10] - array length is 11.
