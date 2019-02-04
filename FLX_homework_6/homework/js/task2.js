const price = parseFloat(prompt("Please enter amount from 0 to 9999999", ""));
const discount = parseFloat(prompt("Please indicate your discount", ""));

const message = (price, discount, discPrice, savedAmount) => 
`Price without discount: ${+price.toFixed(2)} 
Discount: ${+discount.toFixed(2)}%
Price with discount: ${+discPrice.toFixed(2)}
Saved:  ${+savedAmount.toFixed(2)}`;

let consoleResult;

if(price >= 0 && price <= 9999999 && discount >= 0 && discount <= 100) {
    const discPrice = price - price * discount / 100;
    const savedAmount = price - discPrice;
    consoleResult = message(price, discount, discPrice, savedAmount);
} else {
    consoleResult = "Invalid input data";
}

alert(consoleResult);