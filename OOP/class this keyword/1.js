class Account
{
    min_balance=2000;
    Amount;
    
    open_Account()
    { 
        console.log("Account has been opened Successfully")
    }
    deposited_Amount(Cash)                    // Cash is a parameter stores the value that has been given in the argument
    {
        return this.Amount=Cash               // "this" keyword is used to access the class member. 
                                              // inside the class to access the class member       
                                              // "this" is a pointer pointing to current object         
    }
    get_balance() 
    {
        return this.min_balance + this.Amount              // this method only return the value so we have to give console.log(get_balance()) to print the value.
    }


}
let a= new Account()     // New Empty Object - Account{} has been created with a variable reference a.
console.log(a)                                   // Object a-  Account{} with property name & property value will print. 
a.deposited_Amount(5000)                           // 5000 is an argument
console.log( a.deposited_Amount(5000))             //5000    
console.log(a.get_balance())                       //7000

console.log("********Second Object*************")
let b = new Account()     // New Empty Object - Account{} has been created with a variable reference b.
console.log(b)             //  Object b-  Account{} with property name & property value will print.
b.deposited_Amount(7000)                            // 7000 is an argument
console.log( b.deposited_Amount(7000))              // 7000
console.log(b.get_balance())                         // 9000 

console.log("********Third Object*************")
let c = new Account()     // New Empty Object - Account{} has been created with a variable reference c.
console.log(c)             //  Object c-  Account{} with property name & property value will print.
c.deposited_Amount(9000)                            // 9000 is an argument
console.log( c.deposited_Amount(9000))              // 9000
console.log(c.get_balance())                         // 11000 