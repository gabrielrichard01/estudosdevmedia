var n = 0;
var max = 1000;

while(n<max){
    console.log("Jogador "+ n);
    if(n>10){
        break
    }
    n++
}
console.log("FIM!!!");

var c = 0;
var maximo = 1000;
var pares = 0;

for(let i = c; i < maximo; i++){
    if(i % 2 != 0){
        continue
    }
    pares++
}

console.log("Quantidades de Pares " + pares);
console.log("FIM!!!")