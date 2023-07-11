console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

const idadeComprador = 18;
const estaAcompanhada = false;
const temPassagemComprada = true; 

console.log("Destinos possíveis: ");
console.log(listaDeDestinos);

// // if e else controlam o fluxo de execução do código
// if (idadeComprador >= 18) {
//   console.log("Comprador maior de idade");
//   listaDeDestinos.splice(1, 1); // removendo item
// } else if (estaAcompanhada) {
//   console.log("Comprador está acompanhado");
//   listaDeDestinos.splice(1, 1); // removendo item
// } else {
//   console.log("Não é maior de Idade e não posso vender");
// }

if (idadeComprador >= 18 || estaAcompanhada == true) {
  console.log("Boa Viagem!");
  listaDeDestinos.splice(2, 1); // removendo item
} else {
  console.log("Não é maior de Idade e não posso vender");
}

console.log("Embarque: \n\n");
if(idadeComprador >= 18 && temPassagemComprada) {
  console.log("Boa Viagem!")
} else {
  console.log("Você não pode embarcar")
}

console.log(listaDeDestinos);

// Operadores lógicos
// console.log(idadeComprador > 18); // maior que
// console.log(idadeComprador < 18); // menor que
// console.log(idadeComprador <= 18); // menor que ou igual
// console.log(idadeComprador >= 18); // maior que ou igual
// console.log(idadeComprador == 18); // operador de igualdade
