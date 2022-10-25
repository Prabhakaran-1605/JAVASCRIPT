

// Method Overiding

class Account
{
    get_account_details()
    {
        console.log("Account details has been displayed");
    }

}

class Saving_account extends Account               // extends - Keyword which is used to inherit datas from parent class to child class
{

    get_account_details()                           // Method which is given in Parent class can be override by redeclaration in Child class.
    {
        console.log("Saving Account details has been displayed");
    }

}
let a1 = new Saving_account
a1.get_account_details()                          // Saving Account details has been displayed

console.log(a1)                                    // Saving_account {}