/* Составить скрипт, который запрашивает у пользователя ввести номер кредитной карты. Скрипт должен обработать полученный номер и показать на странице последние 4 цифры а остальные цифры карты должны заменены на *. 
Пример: "Номер вашей карты: ************1245"
*/

let userCard = prompt("Please type your bank card number!");
let cardLength = userCard.length;
let replacedNumber = cardLength - 4;
let putSymbol = "*";
let numberOfSymbol = putSymbol.repeat(replacedNumber);
let lastFourNumber = userCard.slice(replacedNumber);

console.log("Your card number is:" + numberOfSymbol + lastFourNumber);