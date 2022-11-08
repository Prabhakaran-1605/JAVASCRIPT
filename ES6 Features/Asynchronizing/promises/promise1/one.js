let employees = [{ id: 101, name: "Rahul", sal: 45000 },
{ id: 102, name: "Sonia", sal: 55000 }]

let createEmployee = (emp) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let flag = true
            flag ? resolve("Data Inserted Successfully") : reject("Data Failed");
            employees.push(emp)
        }, 2000)

    });
}
let get_Employees = () => {
    setTimeout(() => {
        let rows = ""
        for (emp of employees) {
            rows = rows + `<tr>
                            <td>${emp.id}</td>
                            <td>${emp.name}</td>
                            <td>${emp.sal}</td>
                            </tr>`
        }
        //document.getElementById('tbody_Data').innerHTML = "GM"
        document.getElementById('tbody_Data').innerHTML = rows
    }, 1000)
}
createEmployee({ id: 103, name: "Priyanka", sal: 65000 })
    .then((msg) => {                                                       // .then keyword is used to fetch resolve data
        console.log(msg)
        get_Employees();
    })
    .catch((err) => {                                                      // .catch keyword is used to fetch reject data
        console.log(err)
        get_Employees();
    })