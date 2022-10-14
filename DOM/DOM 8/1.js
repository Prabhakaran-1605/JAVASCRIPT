function username(){
    let username = document.getElementById("1").value
    let mobilenumber=document.getElementById("2").value
    let gendermale=document.getElementById("3").length
    let genderfemale=document.getElementById("4").length
    if(username=="" & username.length<4)
    {
        alert("Enter user name")
    }
    if(mobilenumber.length<10)
    {
        alert("Enter 10 Digit Mobile No")
    }
    if( (gendermale.length=="") && (genderfemale.length ==""))
    {
        alert ("select male or female option")
    }

    return false
}