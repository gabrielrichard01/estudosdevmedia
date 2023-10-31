const readline = require('readline');

// Função para calcular o percentual de aumento entre dois valores
function calcularPercentual(a, b) {
  return ((b - a) / a) * 100;
}

// Dados de salário mínimo e IPCA
const salarioMinimo = [510, 545, 622, 678, 724, 788, 880, 937, 998, 1045];
const ipca = [5.91, 6.50, 5.84, 6.50, 5.84, 6.23, 6.29, 4.31, 2.95, 4.52];

// Função para mostrar o salário mínimo de 2010 a 2020
function mostrarSalarioMinimo() {
  console.log("Salário Mínimo de 2010 a 2020:");
  for (let i = 0; i < salarioMinimo.length; i++) {
    console.log(`Ano ${2010 + i}: R$ ${salarioMinimo[i]}`);
  }
}

// Função para mostrar o IPCA de 2010 a 2020
function mostrarIPCA() {
  console.log("Índice de IPCA de 2010 a 2020:");
  for (let i = 0; i < ipca.length; i++) {
    console.log(`Ano ${2010 + i}: ${ipca[i]}%`);
  }
}

// Função para mostrar a comparação entre o percentual salarial e o índice de IPCA
function mostrarComparacao() {
  console.log("Comparação entre o percentual salarial e o índice de IPCA:");
  for (let i = 0; i < salarioMinimo.length - 1; i++) {
    const ano = 2010 + i;
    const percentualSalarial = calcularPercentual(salarioMinimo[i], salarioMinimo[i + 1]);
    const percentualIPCA = ipca[i];
    console.log(`Ano ${ano}:`);
    console.log(`  - Percentual Salarial: ${percentualSalarial.toFixed(2)}%`);
    console.log(`  - Índice de IPCA: ${percentualIPCA.toFixed(2)}%`);
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Pedir ao usuário para digitar uma opção
rl.question('Escolha uma opção:\n1 - Salário Mínimo de 2010 a 2020\n2 - Índice de IPCA de 2010 a 2020\n3 - Comparação entre o percentual salarial e o índice de IPCA\n', (opcao) => {
  opcao = parseInt(opcao);

  // Executar a função correspondente à opção escolhida
  switch (opcao) {
    case 1:
      mostrarSalarioMinimo();
      break;

    case 2:
      mostrarIPCA();
      break;

    case 3:
      mostrarComparacao();
      break;

    default:
      console.log("Opção inválida");
      break;
  }

  rl.close();
});
