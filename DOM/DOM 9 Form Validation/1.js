function registration()
{
    let Username = document.getElementById('1').value
   let Mobilenumber =  document.getElementById('2').value
   let Email=document.getElementById('3').value 
  
    
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
return false
}