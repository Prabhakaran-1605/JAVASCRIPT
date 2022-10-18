class Bank {
    constructor() 
    {                                         
        console.log("Executing Automatically - only once")
    }
    get_Bank_Address() 
    {
        return "Check Google Map"
    }
}
a = new Bank()
console.log(a.get_Bank_Address())
new Bank()
console.log(a.get_Bank_Address())