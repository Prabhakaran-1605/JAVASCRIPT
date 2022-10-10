//Alternative method by using while loop


var num = 2678;
var rem;
var value = 0;
while(num>=1)
{
    rem=num%10;
    value=value*10+rem;
    num=Math.floor(num/10);
    }
    console.log(value);