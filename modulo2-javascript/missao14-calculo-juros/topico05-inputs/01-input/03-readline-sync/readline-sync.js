var readline = require('readline-sync');
var nome = readline.question("Qual seu nome? ");

var soma = 0;
for(var i = 1; i <= 4; i++){
    var nota = readline.questionFloat("Informe a nota " + i + ": ");
    soma += nota;
}

var media = soma / 4;

console.log("Aluno: " + nome);
console.log("Média: " + media.toFixed(2));