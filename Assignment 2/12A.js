//Alternative method by using while loop

var num = 2678;
var rem;
var value = 0;
while(num>=1)
{
    rem=num%10;
    value=value*10+rem;
    num=Math.floor(num/10);    //num/10  - 2678/10 --267.8 --Output will be 267 - method Math.floor
    }
    console.log(value);