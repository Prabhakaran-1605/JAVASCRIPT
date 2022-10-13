let users = [{"Id":100,"Name":"Prabhu","Mail":"gmail.com","Age": 27},{"Id":101,"Name":"Sabari","Mail":"gmail.com","Age": 25},{"Id":102,"Name":"Hari","Mail":"gmail.com","Age": 30},{"Id":103,"Name":"Baskar","Mail":"gmail.com","Age": 45}
]


function user_detail()
{
    let rows = ""
    for(let i=0;i<=3;i++)
    {
    rows = rows + `<tr> 
    <td>${users[i].Id}</td>
    <td>${users[i].Name} </td>
    <td>${users[i].Mail} </td>
    <td>${users[i].Age} </td>
    <tr/>`      
}
    document.getElementById("111").innerHTML = rows
}