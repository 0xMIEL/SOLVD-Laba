class BankAccount {
    constructor(balance = 1000) {
        this._balance = balance
    }
    get balance() {
        return this._balance
    }
    set balance(newBalance) {
        this._balance = newBalance
    }
    get formattedBalance() {
        return `$${this._balance}`
    }
    transfer(targetAccount, amount) {
        if (amount > 0 && amount <= this._balance) {
            this.balance -= amount
            targetAccount.balance += amount
            console.log(`Transfer has been sent.`)
        } else {
            console.log(`Insufficient funds!`)
        }
    }
}

const bankAccount = new BankAccount()
const bankAccount2 = new BankAccount(2000)

bankAccount.transfer(bankAccount2, 600)

console.log(bankAccount, bankAccount2)
