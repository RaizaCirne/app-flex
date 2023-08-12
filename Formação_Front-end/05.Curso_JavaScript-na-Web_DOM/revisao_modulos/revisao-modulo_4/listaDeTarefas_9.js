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
  lista.appendChild(tarefa);
  input.value = " "; 
}

const novaTarefa = document.querySelector('[data-form-button]');

novaTarefa.addEventListener('click', criarTarefa);

const BotaoConlui = () => {
  const botaoConlui = document.createElement('button');

  botaoConlui.innerText = 'concluir';
  botaoConlui.classList.add('check-button');
  botaoConlui.addEventListener('click', concluirTarefa)

  return botaoConlui
}

const concluirTarefa = (evento) => {
  const botaoConclui = evento.target // Descubro elemento que cliquei através do target
  const tarefaCompleta = botaoConclui.parentElement // chamei a variável tarefaCompleta pra pegar o pai do elemento

  tarefaCompleta.classList.toogle('done') // método toggle executa a classe css a partir do momento que eu clicar no botão
  //  toggle devolve um boleano verdadeiro ou falso.
}

// OBJETIVO 1: Tirar marcação de "fui clicado" do console e dar um efeito na tarefa

// 1º Criar função concluirTarefa
// Vai ser uma função anônima 
// const concluirTarefa = () => { 
//}

// 2º Passar essa função dentro do evento no botão
// Apagar o console.log('fui clicado) - não existe mais
// Apagar a função anônima que não vai existir mais
// Passar a função concluirTarefa pra lá como referência do evento, da função que vai ser executada do evento de click

// 3º Agora trabalhar dentro da função concluirTarefa
// 1 - Estamos trabalhando com eventos, por isso queremos saber algumas informações sobre o elemento que o evento foi anexado 
// Quando coloco evento de click no botão, quero saber qual elemento que eu cliquei

// 4º Passar um objeto chamado evento, esse evento vai trazer informações do clock do botão
// const concluirTarefa = (evento) => {
//}

// 5º Então, dentro da função criar uma variável chamada botaoConclui, no botaoConclui passar o evento e uma propriedade chamada target, para saber qual o alvo do evento, ou seja, quando eu clicar, quero saber em quem eu cliquei. 
// const concluitTarefa = (evento) => {
//    const botaoConclui = evento.target
//}

// Vamos usar a estratégia que é subir um nó na nossa árvore do DOM. 
// Vamos colocar o estilo de rabisco na li 
// 6º Criar uma variável tarefaCompleta 
// Como vamos subir um elemento? 
// vamos fazer botaoConlui que é o elemento que eu cliquei e vamos usar a propriedade parentElement 
// Dessa forma, to pegando o pai do elemento que eu cliquei, ou o pai do botão. O pai do botão vai ser a li 
  // const tarefaCompleta = botaoConlui.parentElement

  // const concluirTarefa = (evento) => {
  //   const botaoConclui = evento.target
  //   const tarefaCompleta = botaoConclui.parentElement
  // }

  // 7º Agora que já pegamos o pai do botão, que é a li, colocar o efeito de rabisco na li
  // Acessar classes dentro da li com classList e dentro desse elemento executar o método toggle e dentro do toggle passar a classe do css que vai dar o efeito de rabisco, a classe se chama done. 
  // tarefaCompleta.classList.

  // Resumo: 
  // Cliquei 
  // Descubro elemento que cliquei através do target
  // chamei a variável tarefaCompleta pra pegar o pai do elemento
  // coloco método toggle que vai executar a classe css a partir do momento que eu clicar no botão
  // O toggle devolve um boleano verdadeiro ou falso. Se eu tiver clicado ou não. 
