function userclickbutton(num)
{
    document.getElementById("Calculation").value+=num
}
function compute()
{
    let x=document.getElementById("calculation").value
    let y=eval(x)                                             //eval performs operation
    document.getElementById("calculation").value=y
}
function clr()
{
    document.getElementById("calculation").value=""
}