console.log("Trabalhando com atribuição de variáveis");
const idade = 29;
// let nome = "Ricardo";
const primeiroNome = "Ricardo";
const sobrenome = "Bugan";

// o mesmo resultado com diferentes formas de escrita
// console.log(nome + " " + sobrenome);
// console.log(nome, sobrenome);
console.log(`Meu nome é ${primeiroNome} ${sobrenome}`);

// subscrever - escrever por cima
const nomeCompleto = primeiroNome + sobrenome;
console.log(nomeCompleto);

// const -> variável não muda
// let -> variável que pode mudar, varia
// Boa prática - usar constante para não ocorrer muitos erros no código. Reduzir ao máximo let
