 /* (...) tripledot operator is classified into two types 
 1) spread operator
 2) rest operator 
 
 SPREAD OPERATOR

 Extracting the array and copying into another array & Extracting the object and copying into another object
 Spread operator is the mostly using operator

 REST OPERATOR

 Rest operator can be used only in the function.
 For Example
 if we have 'n' no of arguments on that case we can use rest operator in the parameter 
 so that we can get passed 'n' no of argument values and  those values will be displayed inside an array*/

function wish (a,...b)                /*  ...b is a rest operator*/
{
    console.log(a,"---------", b)
}
wish(10)
wish(10,20)
wish(10,20,30)
wish(10,20,30,40)

