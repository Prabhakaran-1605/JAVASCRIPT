var num = 2678;
var rem;
var value = 0;
for (i=1;i<=num;i++)
{
    rem=num%10;
    value=value*10+rem;
    num=Math.floor(num/10);
    console.log(value);
}
