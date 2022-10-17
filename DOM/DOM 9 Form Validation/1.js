function registration()
{
    let Username = document.getElementById('1').value
   let Mobilenumber =  document.getElementById('2').value
   let Email=document.getElementById('3').value 
  let male = document.getElementById("4").checked
  let female=document.getElementById("5").checked

    
if(Username.length<4)
{
    document.getElementById("11").innerHTML = "Enter minimum 4 Characters"
}
if( Mobilenumber.length<10)
{
    document.getElementById("22").innerHTML = "Enter 10 Digit Number"
}
if(Email.length<=10)
{
    document.getElementById("33").innerHTML = "Enter max 10 Characters"
}
if(( male==false) && (female==false))
{
    document.getElementById("45").innerHTML="Select Male or Female"
}

return false
}