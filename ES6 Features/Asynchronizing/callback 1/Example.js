let calc = (a,b,op) =>
{
    if(op==="sum"){
        return a + b
    } 
    if ( op==="multi")
    {
        return a*b
    }

}
let a1 = calc(20,10,"sum")                // 30  
console.log(a1)
let a2 = calc(20,20,"multi")
console.log(a2)                            //400