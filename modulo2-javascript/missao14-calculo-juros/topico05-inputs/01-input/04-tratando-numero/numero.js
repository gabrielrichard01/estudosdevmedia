var readline = require('readline-sync');

console.log("Calculadora de soma entre x e y: \n");

let x = readline.question("Informe o valor de x: ");
let y = readline.question("informe o valor de y: ");

let soma = Number(x) + Number(y);

console.log(x + " + " + y + " =  "+ soma);