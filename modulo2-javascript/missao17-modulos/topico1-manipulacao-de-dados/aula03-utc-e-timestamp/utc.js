const hoje = new Date();

// Imprimindo uma string com a data e a hora local
console.log(hoje.toLocaleDateString());

// Imprimindo uma string com a data armazenada
console.log(hoje.toString());

// Imprimindo uma string com a data universal (UTC)
console.log(hoje.toUTCString());

// Imprimindo timestamp
console.log(hoje.valueOf())

///////////////////////////////////

const dataAtual = new Date();
const dataPostagem = new Date('2020-11-11T00:00');

// Pegando o timestamp das datas
const timeAtual = dataAtual.getDate();
const timePostagem = dataPostagem.getTime();

// Verifica a diferença em milissegundos
const diferença = timeAtual - timePostagem;

// Convertendo em horas
const segundos = diferença / 1000;
const minutos = segundos / 60;
const horas = minutos / 60;

// Exibindo a diferença
console.log(horas);