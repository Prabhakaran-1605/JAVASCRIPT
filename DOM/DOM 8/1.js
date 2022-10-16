function username(){
    let username = document.getElementById("1").value
    let mobilenumber=document.getElementById("2").value
  
    if(username=="" & username.length<4)
    {
        alert("Enter user name")
    }
    if(mobilenumber.length<10)
    {
        alert("Enter 10 Digit Mobile No")
    }
  
    

    return false
}