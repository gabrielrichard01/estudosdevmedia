var readline = require('readline-sync');

console.log("Calculando um triangulo \n");

var base = readline.question("Informe a base: ");
var altura = readline.question("Informe a altura: ");
var soma = (Number(base) * Number(altura) / 2);

console.log("A área do triangulo é: " + soma);