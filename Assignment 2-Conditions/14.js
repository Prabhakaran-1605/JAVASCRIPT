var number = 7;
let a = 0, b = 1, nextTerm;

console.log('Fibonacci Series:');

for (i = 1; i <= number; i++)
 {
   console.log(a);
   nextTerm = a + b;
    a = b;
    b = nextTerm;
}
