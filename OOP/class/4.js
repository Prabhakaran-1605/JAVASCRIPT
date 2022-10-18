class Account
{
    min_bal=2000;     // Property name & Value

    open_Account()      // Methods (Behaviour)
    {
        console.log("Account opened successfully");
    }
    deposit_Amount()
    {
        console.log("Amount 2000 Deposited Successfully");
    }
    get_status()
    {
        console.log("Status of the amount deposited is printed")
    }
    get_balance()
    {
        console.log( "Available Balance 2000 in your account No:xxxxxxxx7377 ")
    }
    withdraw_Amount()
    {
        console.log("Insufficient Balance")
    }
    close_Account()
    {
        console.log("Account has been Closed")
    }
}
new Account()
let a=new Account();
console.log(a)              // Object with property name & Value will print
console.log(a.min_bal)      // Object value will print
a.open_Account()            // class - method statement which is given inside the function - open_Account will print and i
a.deposit_Amount()
a.get_status()
a.get_balance()
a.withdraw_Amount()
a.close_Account()

