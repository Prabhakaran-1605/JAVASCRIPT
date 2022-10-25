class Account
{
min_bal = 2000;                             // We can overide the properties of class by declaration 
id = 100;
Amount;
}

class Saving_account extends Account
{
min_bal = 5000;
id = 101;
}

var a = new Saving_account()
console.log(a)                               // Output - Saving_account { min_bal: 5000, id: 101, Amount: undefined }
