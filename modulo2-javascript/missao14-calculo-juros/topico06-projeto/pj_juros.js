var readline = require('readline-sync');

console.log("Aplicação de juros:\n")

var divida = readline.question("Informe o valor devido: R$ ");
if(divida == 0){
    console.log("O valor da dívida deve ser maior que zero");
}
var vencimento = readline.question("Informe quantos dias se passaram desde o vencimento do boleto: ");
if(vencimento == 0){
    console.log("Você está em dia!")
}
var taxa = 0.1 * 100
var soma = taxa * divida
var resultado = (Number(soma) + Number(divida)) / taxa

console.log("\nValor original da dívida: R$ "+divida);
console.log("Dias atrasados: "+vencimento);
console.log("Taxa de Juros: "+taxa+ "%");
console.log("Valor total com juros: R$ "+resultado);