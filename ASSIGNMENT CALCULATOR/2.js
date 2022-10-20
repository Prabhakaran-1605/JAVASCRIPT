function view(num)
{
    document.getElementById("result").value+=num
}
function compute()
{
    let x=document.getElementById("result").value
    let y=eval(x)//eval performs operation
    document.getElementById("result").value=y
}
function clr()
{
    document.getElementById("result").value=""
}