var num = 783;
var rem;
var value = 0;
for (i=1;num>=1;i++)
{
    rem=num%10;
    value=value*10+rem;
    num=Math.floor(num/10);
    }
    console.log(value);
