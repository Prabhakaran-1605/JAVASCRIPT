let employee = [{ id: 101, name: "Rahul", sal: 45000 },
{ id: 102, name: "Sonia", sal: 55000 }]

let create_employee = (emp) => {
    setTimeout(() => {
        employee.push(emp)
    }, 4000);
}
create_employee({ id: 103, name: "Priyanka", sal: 65000 })


let getemployee = () => {
    setTimeout(() => {
        let rows = ""
        for (emp of employee) {
            rows = rows + `<tr> 
    <td>${emp.id} </td>
    <td>${emp.name} </td>
    <td>${emp.sal} </td>
    </tr>`}
    document.getElementById("tbodydata").innerHTML = rows
    }, 1000);
}

getemployee();