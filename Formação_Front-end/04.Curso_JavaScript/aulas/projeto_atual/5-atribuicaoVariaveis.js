console.log("Trabalhando com atribuição de variáveis");
// let nome = "Ricardo";
const primeiroNome = "Ricardo";
const sobrenome = "Bugan";

// o mesmo resultado com diferentes formas de escrita
// console.log(nome + " " + sobrenome);
// console.log(nome, sobrenome);
console.log(`Meu nome é ${primeiroNome} ${sobrenome}`);

// const -> variável não muda
// let -> variável que pode mudar, varia
// Boa prática - usar constante para não ocorrer muitos erros no código. Reduzir ao máximo let

let contador = 0;
contador = contador + 1;

// subscrever - escrever por cima
const nomeCompleto = primeiroNome + sobrenome;
console.log(nomeCompleto);

let idade; //declarando variável
idade = 26; //atribuindo valor
idade = idade + 1; // reatribuindo valor
console.log(idade);
