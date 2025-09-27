const num1 = 12;
const num2 = 8;
const name = "Happiness";

const add = num1 + num2;
const sub = num1 - num2;
const mul = num1 * num2;
const div = num1 / num2;

console.log("Addition:", add);
console.log("Substraction:", sub);
console.log("Multiplication:", mul);
console.log("Division:", div);


console.log(`Hello ${name}, the result of num1 + num2 is ${add}`);





const GIVE_AWAY = {
  balance: 10000,
  currency: "USD",
};

const user = {
  name: "Luke Yang",
  balance: 0,
  email: "luke",
  currency: "USD",
};

const user2 = {
  name: "KI Yang",
  balance: 0,
  email: "luke",
  currency: "NGN",
};
const user3 = {
  name: "HUs Yang",
  balance: 0,
  email: "luke",
  currency: "EUR",
};

function currencyConverter(amount, fromCurrency) {
  const USD = 1;
  const EUR = 0.9;
  const NGN = 1600;
  let amountConvert = 0;
  if (fromCurrency === "USD") {
    amountConvert = USD;
  }
  if (fromCurrency === "EUR") {
    amountConvert = EUR;
  }
  if (fromCurrency === "NGN") {
    amountConvert = NGN;
  }
  const result = amount * amountConvert;
  return result;
}

user.balance = currencyConverter(GIVE_AWAY.balance, user.currency);
console.log(user);

user2.balance = currencyConverter(GIVE_AWAY.balance, user2.currency);
console.log(user2);

user3.balance = currencyConverter(GIVE_AWAY.balance, user3.currency);
console.log(user3);






<script src="./javascript.js"></script>