const novaTarefa = document.querySelector('[data-form-button]');

novaTarefa.addEventListener('click', () => {
  const input = document.querySelector('[data-form-input]'); 
  const valor = input.value; 
  console.log(valor)}
);


// OBJETIVO 1: Capturar o valor que está dentro do campo de input

// Estamos lidando com o input do formulário <input class="form-input" type="text">
// Sempre quando for alterar um elemento vai ser com JS e pra isso vamos usar o data-attributes -> data-form-input

// Expressão que temos que utilizar para percorrer o DOM -> document.querySelector('[data-form-input]') 
// Vamos colocar a expressão dentro de uma constante chamada input -> const input = document.querySelector('[data-form-input]')
// Com console.log(input) podemos ver se o input está sendo selecionado, se está funcionando. Ele deve mostrar o input no console

// OBJETIVO 2: Pegar o que for digitado assim que clicar
// Estamos trabalhando com objetos e temos uma propriedade que mostra o valor do input que é a value -> input.value 
// input.value -> Então input que é o input do formulário vai devolver o valor que está dentro do formulário
// Criar uma constante que vamos chamar de valor -> const valor = input.value
// Imprimir o valor no console -> console.log(valor)

// Temos que trabalhar dentro do evento novaTarefaaddEventListener('click', ()=> {}) , a partir do momento que eu clico, ele executa a função. 
// Então dentro da função temos que colocar o input, o valor e o console log. 
/*novaTarefa.addEventListener('click', () => {
  const input = document.querySelector('[data-form-input]'); 
  const valor = input.value; 
  console.log(valor)}
);*/ 

// A partir do momento que eu clico no botão/novaTarefa ele vai executar a função:
// Vai percorrer o DOM para buscar o input 
// Vai pegar o valor que está dentro do input 
// E vai colocar o valor dentro do console.log 
// E vai exibir no navegador 


// Três coisas que precisamos para utilizar um escutador de eventos:

// 1 - Evento -> 'click'
// 2- Elemento que recebe o evento -> 'novaTarefa' que é o botão 
// 3-  O que vai acontecer quando o evento disparar -> A função será executada. Vai percorrer o DOM, pegar o valor que está dentro do input e colocar o valor dentro do console.log para exibir no navegador

// Resumindo: Precisamos do tipo do evento, do elemento que vai receber o evento e o que vai acontecer quando o evento for disparado

