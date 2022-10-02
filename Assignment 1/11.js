var a = -100;
var b = -2;
var c = 40;

if ((a<=b)&&(a<=c)&&(b<=c))
{
    console.log(a,b,c);
}
else if ((b<=c)&&(b<=a)&&(c<=a))
{
    console.log(b,c,a);
}
else if((c<=a)&& (c<=b) && (a<=b))
{
    console.log(c,a,b);
}else if ((a<=b)&&(a<=c)&&(c<=b))
{
    console.log(a,c,b);
}
else if((b<=a)&&(b<=c)&&(a<=c))
{
    console.log(b,a,c);
}
else
{
console.log(c,b,a);
}

