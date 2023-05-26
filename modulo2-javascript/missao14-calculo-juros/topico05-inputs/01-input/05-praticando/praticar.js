var readline = require('readline-sync');

console.log("Conversor de Milhas para Quilômetros: \n");

let mi = readline.question("Informe o valor em Milhas: ");

let km = mi / 0.62137;

console.log(mi+"mi equivale a "+km+"km");