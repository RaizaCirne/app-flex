(() => { const criarTarefa = (evento) => {

  evento.preventDefault();

  const lista = document.querySelector('[data-list]');

  const input = document.querySelector('[data-form-input]'); 
  const valor = input.value; 

  const tarefa = document.createElement('li');
  tarefa.classList.add('task');

  const conteudo = `<p class="content">${valor}</p>` 

  tarefa.innerHTML = conteudo;

  tarefa.appendChild(BotaoConlui()); // li pai do botão concluir
  tarefa.appendChild(BotaoDeleta()); // li pai do botão deletar

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
}

// Criando componente
const BotaoDeleta = () => {
  const botaoDeleta = document.createElement('button')

  botaoDeleta.innerText = 'deletar'
  botaoDeleta.addEventListener('click', deletarTarefa)
 
  return botaoDeleta 
}

const deletarTarefa = (evento) => {
  const botaoDeleta = evento.target

  const tarefaCompleta = botaoDeleta.parentElement

  tarefaCompleta.remove()

  return botaoDeleta
}

})()

// OBJETIVO: Criar o botão para deletar a tarefa
// 1º Criar um componente criado BotaoDeleta -> componente começa com maiúsculo 
// 2º Criar um botão de deletar com document.createElement('button')
// 3º Colocar o texto dentro do botão para quando for renderizado aparecer com texto de deletar
// 4º Colocar o evento de click para quando clicar no botão de deletar realizar alguma ação
// 5º Retornar o botão deleta, pois vamos chamar esse componente na função que cria tarefa -> tarefa.appendChild(BotaoDeleta())

// Deletar a tarefa 
// 1º Passar dentro do addEventListener uma função que vai executar a ação -> deletarTarefa 
// 2º Criar a função deletarTarefa 
// 3º Saber aonde eu cliquei. Obter essa informação atravésdo objeto de evento 
// 4º Criar constante botaoDeleta que vai pegar o alvo dele que é o target -> const botaoDeleta = evento.target

// 6º Retornar o botao deleta ->  return botaoDeleta

// Quando ddeletar, quero deletar o elemento e não o botão
// Estratégia de pegar o elemento acima do botão -> botaoConclui.parentElement, que é a li 
//   const tarefaCompleta = botaoDeleta.parentElement -> Vamos pegar o elemento pai do botão deleta que é a li, pois quando clicar no deletar vamos excluir a li iteira

// Remover a li 
// 1º Usar método usado pra remover objetos da árvore -> tarefaCompleta.remove()
// Ao clicar ele vai executar o remove e vai remover o nó da árvore 

