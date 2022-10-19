class Account
{
constructor(id,amount)
{
    this.acc_Id = id
    this.acc_Amount = amount
}
}

class Saving_account extends Account
{
    constructor(id, name, amount, email)
    {
    super(id,amount)
    this.acc_Name = name;
    this.acc_Email = email;
    }
}
 let a = new Saving_account(100,"Prabhu",5000,"prabhu1605@gmail.com")
console.log(a)
let b = new Saving_account(101,"Prabhuji",10000,"prabhuji1605@gmail.com")
console.log(b)