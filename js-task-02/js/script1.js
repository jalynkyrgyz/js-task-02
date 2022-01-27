// Дана строка 'ddd@bbb@ccc'. ЗАмените все @ на !

let str = 'ddd@bbb@ccc';
let newSymbol = '!';
let replacedSymbol = str.replaceAll("@", newSymbol);
console.log(replacedSymbol);
