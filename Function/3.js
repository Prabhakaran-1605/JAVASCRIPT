function add(a,b,c,d=40){
    console.log(a+b+c+d);
}
add(20,20,10)     // 90
add(10,20,30,30)  //90
add(20,20)        //Nan because c is not defined, number + nondefined value become Nan