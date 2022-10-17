function register()
{

    let username = document.getElementById("username").value
    let password= document.getElementById("password").value
    let button = document.getElementById("button")

    if((username.length<5)||(password.length<8))
    {
        button.disabled = true
        button.style = "background-color:aqua; , color:white;"
    }
    if((username.length>5)&&(password.length>8))
    {
        button.disabled = false
    console.log(username,password)
    }
    return false
}