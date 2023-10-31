// 2020-11-09T18:43:57.961Z
const dataAtual = new Date();

// Vai imprimir 10
console.log('getMonth', dataAtual.getMonth());

// Vai imprimir 11
console.log('getMonth', dataAtual.getMonth() + 1);

////////////////////////////////////////////

const dataAtual2 = new Date();

console.log(dataAtual2.getFullYear());
console.log( dataAtual2.getMonth());
console.log( dataAtual2.getDate());
console.log( dataAtual2.getHours());
console.log( dataAtual2.getMinutes());
console.log( dataAtual2.getSeconds());
console.log( dataAtual2.getMilliseconds());
console.log( dataAtual2.getDay());

/////////////////////////////////////////////////////////

console.log( dataAtual.getUTCFullYear());
console.log( dataAtual.getUTCMonth());
console.log( dataAtual.getUTCDate());
console.log( dataAtual.getUTCHours());
console.log( dataAtual.getUTCMinutes());
console.log( dataAtual.getUTCSeconds());
console.log( dataAtual.getUTCMilliseconds());
console.log( dataAtual.getUTCDay());

//////////////////////////////////////////////////////////

const dataAtual3 = new Date();

console.log(dataAtual3.getTime());
console.log(dataAtual3.getTimezoneOffset());
console.log(dataAtual3.valueOf());