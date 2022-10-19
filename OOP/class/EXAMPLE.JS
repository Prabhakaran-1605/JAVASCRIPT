class Account {
    constructor(name, email) {
        this.acc_Name = name
        this.acc_Email = email
    }
}
class Savings_Account extends Account {
    constructor(id, name, email, amount) {
        super(name, email)
        this.acc_Id = id;
        this.acc_Amount = amount
    }
}
let a1 = new Savings_Account(101, "Rahul", 'Rahul@pm.com', 5000)
let a2 = new Savings_Account(102, "Priyanka", 'priyanka@pm.com', 15000)
console.log(a1)
console.log(a2)