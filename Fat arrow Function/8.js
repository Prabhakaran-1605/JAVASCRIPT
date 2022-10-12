// function x()
// {
// console.log(this)
// }
// x()

// Output will be -- The object contains lot of Context if we use "this" keyword in Normal Function 


let x = () => {
    console.log(this)
}
x()
//  // Output will be empty object {} if we use "this" -- Keyword

