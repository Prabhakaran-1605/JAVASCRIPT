const Account = require('./Account')
class Savings_Account extends Account {
    deposit_Amount(amount) {
        console.log(this.min_Bal + amount)
    }
}
let a1 = new Savings_Account();
a1.get_Account_Details()
console.log(a1)
a1.deposit_Amount(1500)



// import Account from './Account'    -- ES6