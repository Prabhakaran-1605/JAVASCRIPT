let users = [{"Id":100,"Name":"Prabhu","Mail":"gmail.com","Age": 27},{"Id":101,"Name":"Sabari","Mail":"gmail.com","Age": 25},{"Id":102,"Name":"Hari","Mail":"gmail.com","Age": 30},{"Id":103,"Name":"Baskar","Mail":"gmail.com","Age": 45}
]


function user_detail()
{
    let rows = ""
    for( a of users )
    {
    rows = rows + `<tr> 
    <td>${a.Id}</td>
    <td>${a.Name} </td>
    <td>${a.Mail} </td>
    <td>${a.Age} </td>
    <tr/>`      
}
    document.getElementById("111").innerHTML = rows
}