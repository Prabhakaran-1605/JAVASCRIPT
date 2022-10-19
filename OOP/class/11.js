class Account                               // Parent class
{
constructor(id,amount)                       // Constructor is used to initialize object values     id & amount are parameters
{
    this.acc_Id = id                          // "this" is a keyword pointing towards current object
                                              // "this" keyword is used to access the class member inside the class.  acc_ID & acc_Amount are class members.
    this.acc_Amount = amount
}
}

class Saving_account extends Account          // child class 
{
    constructor(id, name, amount, email)      // Constructor is used to initialize object values     id, name,amount, email are parameters
    {
    super(id,amount)                           // Super ( ) keyword is used to invoke parent class constructor
    this.acc_Name = name;                     // "this" is a keyword pointing towards current object
                                              // "this" keyword is used to access the class member inside the class.  acc_Name & acc_Email are class members.
    this.acc_Email = email;
    }
}
 let a = new Saving_account(100,"Prabhu",5000,"prabhu1605@gmail.com")
console.log(a)
let b = new Saving_account(101,"Prabhuji",10000,"prabhuji1605@gmail.com")
console.log(b)