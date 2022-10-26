// Spread Operator is used to extracting array element and copy into another array

// Copying of an Array element 
// Extending of an Array element
// Merging of an Array element


let marks = [40, 50, 44, 55, 66]

let new_marks = [...marks]

console.log(new_marks)


// Another Method  - Map Method  - Ilterate an array and execute the provided function and return new array

let new_mark = marks.map((mark) =>{
    return mark;
})
console.log(new_mark)

// Another Method - Filter Method - Ilterate an array and execute the provided function and return new array

let new_m = marks.filter((a)=>{
    return a;
})
console.log(new_m)


