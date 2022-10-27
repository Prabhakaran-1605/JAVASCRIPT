const [a, b, ...{ pop, push }] = [1, 2];

console.log (a, b);           // 1 2

console.log (pop, push);      // [Function: pop] [Function: push]

const [c, d, ...others] = [1, 2];

console.log (others)          // []
