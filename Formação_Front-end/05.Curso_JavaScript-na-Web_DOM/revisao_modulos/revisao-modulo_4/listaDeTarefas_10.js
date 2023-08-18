(() => { const criarTarefa = (evento) => {

  evento.preventDefault();

  const lista = document.querySelector('[data-list]');

  const input = document.querySelector('[data-form-input]'); 
  const valor = input.value; 

  const tarefa = document.createElement('li');
  tarefa.classList.add('task');

  const conteudo = `<p class="content">${valor}</p>` 

  tarefa.innerHTML = conteudo;

  tarefa.appendChild(BotaoConlui()); // li pai do botão
  lista.appendChild(tarefa);
  input.value = " "; 
}

const novaTarefa = document.querySelector('[data-form-button]');

novaTarefa.addEventListener('click', criarTarefa);

const BotaoConlui = () => {
  const botaoConlui = document.createElement('button');

  botaoConlui.classList.add('check-button');
  botaoConlui.innerText = 'concluir';
  botaoConlui.addEventListener('click', concluirTarefa);

  return botaoConlui
}

const concluirTarefa = (evento) => {

  const botaoConclui = evento.target

  const tarefaCompleta = botaoConclui.parentElement

  tarefaCompleta.classList.toggle('done')
}})()

// Temos um problema no código: No navegador temos acesso à regra de negócio de nossas funções
// Isso é um problema, as pessoas não podem ter acesso à nossa regra de negócio. Elas só tem que interagir com nossa aplicação.

// OBJETIVO:Bloquear esse tipo de acesso 
// Todo nosso arquivo está no escopo global, por isso, temos acesso a ele fora da aplicação, no navegador no console.

// Estratégia: Utilizar a IIFE (Immediately invoked function expression) ou Função de Execução Imediata 
// Vamos colocar nosso arquivo dentro do escopo de uma função 

// 1º Colocar todo arquivo entre parênteses 
// 2º Usar função anônima pra executar ()=> {} 
// Colocamos dentro do escopo da função
// 3º Colocar parênteses no término da função para executar ()
