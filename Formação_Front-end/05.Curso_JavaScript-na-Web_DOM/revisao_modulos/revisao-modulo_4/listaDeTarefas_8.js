const criarTarefa = (evento) => {

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

  botaoConlui.innerText = 'concluir';
  botaoConlui.classList.add('check-button');
  botaoConlui.addEventListener('click',() => {
    console.log('Fui clicado!');
  } )

  return botaoConlui
}

// OBJETIVO 1: Saber que a tarefa foi completada
// Criar um indicador, um traço no meio da tarefa pra mostrar que já completamos ela
// Criar um botão e ao clicar nele, ele vai fazer um risco na tarefa 

// Criar um componente: 
// Um componente é uma parte da aplicação. Vários componentes criam a aplicação. 
// Geralmente componentes são independentes e podemos usar ele em várias partes da aplicação 

// 1º Criar um componente do botão: 
// Ele vai ser responsável por realizar uma ação na aplicação:
// const BotaoConlui = () => { } 

// 2º Criar o elemento de botão com createElement()
// Armazenar numa variável: const botaoConclui
//  const botaoConlui = document.createElement('button');
// const BotaoConlui = () => {
// const botaoConlui = document.createElement('button'); }


// 3º Criar evento de click/escutador: 
// Caso alguém clique no botão, vai acontecer alguma ação. 
// Colocar esse evento dentro do botão 
// Pra acionar o evento temos que passar o método addEventListener() e dentro dele passar o evento e o que vai acontecer ao clicar
// Criar função anônima e dentro dela passar o console.log()
// botaoConlui.addEventListener('click',() => {
//   console.log('Fui clicado!');
// } )

// 4º Retornar o botão: 
// return botaoConlui
// Criamos um botão dentro do componente BotaoConclui. Queremos que o botão na aplicação fique junto com a tarefa que é uma li, então temos que botar o botão dentro da li

// 5º Colocar botão dentro da li
// Trabalhar com coneito de nós entre hierarquias de pai e filho
// Temos a li que vai ser o pai do parágrafo e também vai ser o pai do botão
// tarefa.appendChild(BotaoConlui())
// dentro do appendChild passamos o botão conclui. 
// Executamos ele 

// 6º Dar estilo ao botão 
// Colocar classe dentro do elemento usando a propriedade classList
// Usar o método add() para colocar classe no botão
//  botaoConlui.classList.add('check-button')

// 7º Colocar texto no botão para dizer que é o concluir 
// Usar propriedade innerTex()
// Essa propriedade representa o conteúdo de texto que vai ser renderizado no botão
// Vai ser o texto que vai ser mostrado quando a gente gerar o botão 
// 1 - Chamar o elemento que criamos que é o botaoConlui 
// 2 - Colocar a propriedade innerText:  botaoConlui.innerText 
// 3 - Dar nome ao botão: concluir 
// botaoConlui.innerText = 'concluir' 