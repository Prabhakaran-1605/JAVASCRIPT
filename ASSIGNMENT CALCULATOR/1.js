function userclickbutton(num)
{
    document.getElementById("Calculation").value+=num
    return false
}
function compute()
{
    let x=document.getElementById("calculation").value
    let y=eval(x)                                             //eval performs operation
    document.getElementById("calculation").value=y
    return false
}
function clr()
{
    document.getElementById("calculation").value=""
    return false
}