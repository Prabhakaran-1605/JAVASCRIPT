var number = 10;
let a = 0, b = 1, nextTerm;

console.log('Fibonacci Series:');

for (let i = 1; i <= number; i++) {
    if(a<=17)
    {
    console.log(a);
    }
    nextTerm = a + b;
    a = b;
    b = nextTerm;
}