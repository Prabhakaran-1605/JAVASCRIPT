var number = 10;
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');

for (let i = 1; i <= number; i++) {
    if(n1<=17)
    {
    console.log(n1);
    }
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}