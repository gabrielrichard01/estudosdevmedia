const dataAtual = new Date();

dataAtual.setFullYear(1998);
console.log(dataAtual);

dataAtual.setMonth(1);
console.log(dataAtual);

dataAtual.setDate(20);
console.log(dataAtual);

dataAtual.setHours(11);
console.log(dataAtual);

dataAtual.setMinutes(0);
console.log(dataAtual);

dataAtual.setSeconds(59);
console.log(dataAtual);

dataAtual.setMilliseconds(15);
console.log(dataAtual);

///////////////////////////////////

dataAtual.setUTCFullYear(1998);
dataAtual.setUTCMonth(5);
dataAtual.setUTCDate(20);
dataAtual.setUTCHours(11);
dataAtual.setUTCMinutes(0);
dataAtual.setUTCSeconds(59);
dataAtual.setUTCMilliseconds(15);

/////////////////////////////////////

const dataAtual2 = new Date("2020-11-09 01:05:09")
console.log(dataAtual2.toDateString());
// Impressão: Mon Nov 09 2020

dataAtual2.setTime(886302309000);
console.log(dataAtual2.toDateString());
// Impressão: Sun Feb 01 1998