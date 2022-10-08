function add(a,b,c,d=40)      // a,b,c,d are parameters
{
    console.log(a+b+c+d);       
}
add(20,20,10)     // 90           20,20,10 are arguments
add(10,20,30,30)  //90
add(20,20)        //Nan because c is not defined, number + nondefined value become Nan