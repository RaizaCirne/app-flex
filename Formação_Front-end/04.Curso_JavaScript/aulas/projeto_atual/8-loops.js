console.log(`\nTrabalhando com condicionais`);
const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Curitiba";

console.log("\n Destinos possíveis:");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;
while (contador < 3) {
  if (listaDeDestinos[contador] == destino) {
    destinoExiste = true;
    break;
  }
  contador += 1;
}

console.log("Destino exite: ", destinoExiste);

if (podeComprar && destinoExiste) {
  console.log("Boa viagem");
} else {
  console.log("Desculpe, tivemos um erro!");
}

//for
// 1 - declarar inicialização de variável
// 2 - condição que ele vai verificar depois de cada loop
// 3 - o que ele vai executar no final de cada loop
for (let i = 0; i < 3; i++) {
  if (listaDeDestinos[i] == destino) {
    destinoExiste = true;
  }
}
