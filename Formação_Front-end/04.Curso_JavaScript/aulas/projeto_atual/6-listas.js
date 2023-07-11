console.log(`Trabalhando com listas`);

// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

// console.log("Destinos possíveis: ");
// console.log(salvador, saoPaulo, rioDeJaneiro);

// Temos uma estrutura de dados, um jeito de trabalhar dentro de JS que são as listas que chamamos de array
const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

//Comando para inserir mais um elemento na lista
listaDeDestinos.push(`Curitiba`); //adicionando um item na lista

console.log("Destinos possíveis: ");
//console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(listaDeDestinos);

listaDeDestinos.splice(1, 1); // para remover um item da lista -> passar posição na lista (segunda posição, um elemento) - contagem começa em 0.
console.log(listaDeDestinos);

console.log(listaDeDestinos[1], listaDeDestinos[0]); //para mostrar um único elemento na lista
