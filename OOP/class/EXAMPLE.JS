class Account {

    constructor(id, name, amount) {
        this.acc_Id = id;
        this.acc_Name = name;
        this.acc_Amount = amount
    }
    get_Account_Bal() {
        return this.acc_Amount;
    }
}
let a1 = new Account(101, "Rahul", 1500)
console.log(a1)
console.log(a1.get_Account_Bal())

let a2 = new Account(102, "Priyanka", 25000)
console.log(a2.get_Account_Bal())
console.log(a2)