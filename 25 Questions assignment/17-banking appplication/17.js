
const customer = {
    name:"ravi",
    balance:1000,
    deposit: function(amount){
            this.balance+=amount
            console.log(`Deposit ${amount}  || New Balance ${this.balance}`)
    },

    withdraw: function(amount){
        if (this.balance>=amount) {
            this.balance-=amount
            console.log(`Withdraw ${amount} || New Balance ${this.balance}`)
            
        }
        else { console.log("Insuficient balance")}
    },
}

console.log("=============================")
customer.deposit(1000)
customer.withdraw(1500)
customer.withdraw(1000)
console.log("=============================")