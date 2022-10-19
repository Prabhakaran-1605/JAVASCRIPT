// Without class properties, we can directly assign class member inside the methods by using "this" keyword because javascript is a loosely typed programming language



class Account                       
{                                
    
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