const number = 371;
const numberOfDigits = 3;
let sum = 0;

// create a temporary variable
let temp = number;

while (temp > 0) {

    let remainder = temp % 10;

    sum =sum + remainder ** numberOfDigits;   // we can say power of reminder  1 power 3 -- 3,  

    // removing last digit from the number
    temp = parseInt(temp / 10);          // convert float into integer
    
}
console.log(sum);

if (sum == number) {
    console.log( number," is an Armstrong number");
}
else {
console.log( number , " is not an Armstrong number");
}