// At the time of creating Object if i want to pass some Values 
// Special Method is required which is called as Constructor
// To initilize Object values - Constructor Method is required

// Construct is a method - execute automatically at the object creation
// We can't execute constructor method explicitely
//Constructor Method - we can't invoke


class Account                        // This class contains properties and two methods( constructor(id,Name,Amount) & get_Amount() )
{                                
    Acc_id;                          //  Properties  - Acc_id; Acc_Name; Acc_amount;
    Acc_Name;
    Acc_amount;

constructor(id,Name,Amount)         // Constructor is a special method
{
this.Acc_id = id;
this.Acc_Name = Name;
this.Acc_amount = Amount
}
get_Amount()                        //get_Amount() is a method
{
return this.Acc_amount;
}
}
let a = new Account (100, "Prabhu", 5000)          // Constructor method is introduced to Initialize object values
console.log(a)
console.log(a.get_Amount())
let b = new Account (101, "prabhuji", 10000)
console.log(b)
console.log(b.get_Amount())









