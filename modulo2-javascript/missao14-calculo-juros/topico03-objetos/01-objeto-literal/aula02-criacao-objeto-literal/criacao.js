const carro = {
    marca: "VW",
    modelo: "Golf",
    cor: "Cinza",
    cambio: "Automatico",
    info:function(){
        console.log("marca: " + this.marca);
        console.log("modelo: " + this.modelo);
    }
};

let {marca,modelo} = carro;

marca = "Honda";
modelo = "HRV";

console.log(carro);
console.log(marca);
console.log(modelo);