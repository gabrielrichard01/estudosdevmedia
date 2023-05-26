function boasVindas(nome = "Desconhecido"){
    console.log(`Seja bem-vindo ${nome}!`);
}

boasVindas("Gabriel");
boasVindas();

function boasVindasCC (nome){
    nome = nome || "Desconhecido";
    console.log(`Seja bem-vindo ${nome}!`);
}

boasVindas("Gabriel");
boasVindas();