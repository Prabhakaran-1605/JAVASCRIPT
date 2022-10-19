class Account                                          // Parent class
{
min_balance = 2000;                                    // Properties
get_account_details()                                  // Method
{
    console.log("Account details are displaying")
}
}
class Saving_account extends Account                  // Child class
{
    saving_account_details(amount)                           // method  (Additional features)
    {
     console.log (this.min_balance + amount)                 // "this" keyword is used to access the class member inside the class
                                                             // "this" is a keyword pointing towards current current Object
                                                             
    }
}

let a = new Saving_account()
console.log(a)
a.get_account_details()
a.saving_account_details(2000)                                 // 2000 is an argument which is going to assign the value to parameter (amount) of method (saving_account_details(amount))

console.log( "*********Second child class*********")

class Current_account extends Account                  // Child class
{
    min_balance = 4000;                                // Properties - min_balance redeclaring as 4000
Current_account_details(amount)                        // Method (Additional features)
{
    console.log(this.min_balance + amount)             // "this" keyword is used to access the class member inside the class
                                                       // "this" is a keyword pointing towards current current Object
}
}
let b = new Current_account()
console.log(b)
b.get_account_details()
b.Current_account_details(8000)                         // 8000 is an argument which is going to assign the value to parameter (amount) of method (current_account_details(amount))
