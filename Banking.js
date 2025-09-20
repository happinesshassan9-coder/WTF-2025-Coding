// Evaluation of 4 different account

const accountOne = {
    name: "Happiness",
    balance: 6000,
    currency: "USD",
    type: "savings"
}

const accountTwo = {
    name: "Gideon",
    balance: 600,
    currency: "USD",
    type: "Checking"
}

const accountThree = {
    name: "Samuel",
    balance: 8000,
    currency: "USD",
    type: "savings"
}

const accountFour = {
    name: "Triumph",
    balance: 25000,
    currency: "EUR",
    type: "Checking"
}

//adding different deposit amounts
accountOne.balance += 2000;
accountThree.balance += 3000;

// printing new balance to the console
console.log (`${accountOne.name}'s new balance: ${accountOne.balance} ${accountOne.currency}`);
console.log (`${accountThree.name}'s new balance: ${accountThree.balance} ${accountThree.currency}`);



// attempt wihdrawals
//amount to be withdrawn
let withdrawalAmount = 5000;

//wihdraw from account two
if (accountTwo.balance >= withdrawalAmount){
    accountTwo.balance -= withdrawalAmount;
    console.log(`${accountTwo.name} withdrew ${withdrawalAmount} ${accountTwo.currency}. new balance: ${accountTwo.balance} ${accountTwo.currency}`);
} else {
    console.log(`withdrawal denied for ${accountTwo.name}: insufficiennt funds`);
}

//wihdraw from account Four
if (accountFour.balance >= withdrawalAmount){
    accountFour.balance -= withdrawalAmount;
    console.log(`${accountFour.name} withdrew ${withdrawalAmount} ${accountFour.currency}. new balance: ${accountFour.balance} ${accountFour.currency}`);
} else {
    console.log(`withdrawal denied for ${accountFour.name}: insufficiennt funds`);
} 


//monthly maintenance
// add 2% interest to savings account
// deduct 50 unit from checking account

// monthly maintenance for accountOne
if (accountOne.type === "savings") {
    accountOne.balance += accountOne.balance * 0.02;
} else if (accountOne.type === "checking") {
    accountOne.balance -= 50;
 }    

 // monthly maintenance for accountTwo
if (accountTwo.type === "savings") {
    accountTwo.balance += accountTwo.balance * 0.02;
} else if (accountTwo.type === "checking") {
    accountTwo.balance -= 50;
 }  

 // monthly maintenance for accountThree
if (accountThree.type === "savings") {
    accountThree.balance += accountThree.balance * 0.02;
} else if (accountThree.type === "checking") {
    accountThree.balance -= 50;
 }  

 // monthly maintenance for accountFour
if (accountFour.type === "savings") {
    accountFour.balance += accountFour.balance * 0.02;
} else if (accountFour.type === "checking") {
    accountFour.balance -= 50;
 }  

//print results on the console after monthly naintenance
console.log(`${accountOne.name}'s balance after maintenance: ${accountOne.balance} ${accountOne.currency}`);
console.log(`${accountTwo.name}'s balance after maintenance: ${accountTwo.balance} ${accountTwo.currency}`);
console.log(`${accountThree.name}'s balance after maintenance: ${accountThree.balance} ${accountThree.currency}`);
console.log(`${accountFour.name}'s balance after maintenance: ${accountFour.balance} ${accountFour.currency}`);

// comparisons
//find the highest and lowest balance
//assume accountOne is the highest and lowest

let highest =accountOne;
let lowest = accountOne;

//compare with accountTwo
if (accountTwo.balance > highest.balance) {
    highest = accountTwo
    }

    if (accountTwo.balance < lowest.balance) {
        lowest = accountTwo
       }
       
// compare with account Three

if (accountThree.balance > highest.balance) {
    highest = accountThree
    }

    if (accountThree.balance < lowest.balance) {
        lowest = accountThree
       }

// compare with account Four

if (accountFour.balance > highest.balance) {
    highest = accountFour
    }

    if (accountFour.balance < lowest.balance) {
        lowest = accountFour
       }
    
//print result
console.log(`highest balance: ${highest.name} with ${highest.balance} ${highest.currency}`);
console.log(`lowest balance: ${lowest.name} with ${lowest.balance} ${lowest.currency}`);


// account status check for each account

//accountOne status check
let statusOne
if (accountOne.balance > 0) {
    statusOne = "Active"
    console.log (`${accountOne.name}'s account is active`);
     } else if (accountOne.balance === 0) {
        statusOne = "Empty";
        console.log(`${accountOne.name}'s account is Empty`);
     } else {
        statusOne = "overdrawn";
        console.log(`${accountOne.name}'s account is over drawn`);
        }
        
//accountTwo status check
let statusTwo
if (accountTwo.balance > 0) {
    statusTwo = "Active"
    console.log (`${accountTwo.name}'s account is active`);
     } else if (accountTwo.balance === 0) {
        statusTwo = "Empty";
        console.log(`${accountTwo.name}'s account is Empty`);
     } else {
        statusTwo = "overdrawn";
        console.log(`${accountTwo.name}'s account is over drawn`);
        }

//accountThree status check
let statusThree
if (accountThree.balance > 0) {
    statusThree = "Active"
    console.log (`${accountThree.name}'s account is active`);
     } else if (accountThree.balance === 0) {
        statusThree = "Empty";
        console.log(`${accountThree.name}'s account is Empty`);
     } else {
        statusThree = "overdrawn";
        console.log(`${accountThree.name}'s account is over drawn`);
        }

    //accountFour status check
let statusFour
if (accountFour.balance > 0) {
    statusFour = "Active"
    console.log (`${accountFour.name}'s account is active`);
     } else if (accountFour.balance === 0) {
        statusFour = "Empty";
        console.log(`${accountFour.name}'s account is Empty`);
     } else {
        statusFour = "overdrawn";
        console.log(`${accountFour.name}'s account is over drawn`);
        }

        //transaction summary
    
console.log(`${accountOne.name}'s account balance: ${accountOne.balance} ${accountOne.currency}. \nStatus: ${statusOne}`)
console.log(`${accountTwo.name}'s account balance: ${accountTwo.balance} ${accountTwo.currency}. \nStatus: ${statusTwo}`)
console.log(`${accountThree.name}'s account balance: ${accountThree.balance} ${accountThree.currency}. \nStatus: ${statusThree}`)
console.log(`${accountFour.name}'s account balance: ${accountFour.balance} ${accountFour.currency}. \nStatus: ${statusFour}`)