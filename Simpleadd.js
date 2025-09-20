console.log(2 + 2)
console.log(5 -2)
console.log(5 * 20)
console.log(5 / 20)
console.log(20 % 10)

let result = 2
console.log(result, ':::result. 1')
result = result + 2
console.log(result, ':::result. 2')
result = result + 5
console.log(result, ':::result. 3')







///bank transfer simulation
let userBalance =100000
const senderBankAccount = "Mike Hanks"
let senderBalance = 200000
const recieverBankAccount = "Happiness Hassan"
let recieverBalance = userBalance

let bill = 10000

const transferAmount = senderBalance - bill


console.log ("user balance before transfer:", userBalance)
userBalance = userBalance - transferAmount
console.log("user balance after transfer:", userBalance)

let isLoggedIn = false
console.log(isLoggedIn, `before login`)
isLoggedIn = true
console.log(isLoggedIn, `after login`)


console.log(`Before transfer`, {senderBalance, recieverBalance})
senderBalance = transferAmount
recieverBalance = recieverBalance + bill
console.log (`After transfer`, {senderBalance, recieverBalance})
