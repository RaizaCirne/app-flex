  import BotaoConlui from "./componentes/concluiTarefa.js";
  import BotaoDeleta from "./componentes/deletaTarefa.js";

  const criarTarefa = (evento) => {

  evento.preventDefault();

  const lista = document.querySelector('[data-list]');

  const input = document.querySelector('[data-form-input]'); 
  const valor = input.value; 

  const tarefa = document.createElement('li');
  tarefa.classList.add('task');

  const conteudo = `<p class="content">${valor}</p>` 

  tarefa.innerHTML = conteudo;

  tarefa.appendChild(BotaoConlui()); 
  tarefa.appendChild(BotaoDeleta()); 

  lista.appendChild(tarefa);
  input.value = " "; 
}

const novaTarefa = document.querySelector('[data-form-button]');

novaTarefa.addEventListener('click', criarTarefa);


// OBJETIVO: Estruturar o código 
// Organizar o código para as pessoas encontrarem o código dentro da aplicação de maneira mais simples, e também caso queira criar novas funcionalidades fica mais facil. 

// 1º Criar uma pasta chamada "componentes" 
// Temos 2 componentes: BotaoDeleta e BotaoConclui 

// Criar arquivos dentro da pasta componentes
// 2º Criar arquivo concluiTarefa.js
// 2º Criar arquivo deletaTarefa.js

// 3º Copiar componente BotaoConclui e a função que faz concluir a tarefa const concluirTarefa
// 4º Colar dentro do arquivo concluiTarefa.js 

// 5º Copiar componente BotaoDeleta e a função const deletarTarefa 
// 6º Colar no detetaTarefa.js

// 7º Encapsular nosso componente através de módulos 
// MÓDULOS: São pequenas partes do código, que juntos, formam um todo
// Como transformar o código JS em um módulo? 
// 8º Usar a sintaxe export default BotaoConclui 
// Então to exportanto apenas o componente BotaoConclui e essa sintaxe tem o mesmo objetivo da IIFE que é proteger o código 
// 9º Importar o BotaoConclui dentro do arquivo listaDeTarefa.js
// 10º Excluir a IIFE 
// 11º Usar o import para chamar o componente ->   import BotaoConlui from "./componentes/concluiTarefa.js";


// 12º Fazer a mesma coisa no deletaTarefa
// export default BotaoDeleta no deletaTarefa.js
//  import BotaoDeleta from "./componentes/deletaTarefa.js" no listaDeTarefas.js

// listaDeTarefas.js é o arquivo principal
// 13º Renomear para main.js para indicar que é o arquivo principal da aplicação 

// Falar para aplicação que é um módulo. 
// No html dentro da tag script colocar apropriedade type="module"

// CORS: Especificação do W3C(organização que cuida de padrões da web)
// O CORS permite que a gente acesse recursos de outro site usando domínios diferentes. Isso porque os navegadores usam uma funcionalidade de segurança chamada same origin polllicy 

// Como habilitar o CORS? 
// Utilizar um servidor -> Live Server (extensão) -> instalar 

// RESUMO:
// Separamos as responsabilidades em 2 componentes, um de deleta e um de conclui 
// Temos o arquivo html
// Temos o arquivo main.js que é o arquivo principal da aplicação. É ele que inicia a nossa aplicação. 