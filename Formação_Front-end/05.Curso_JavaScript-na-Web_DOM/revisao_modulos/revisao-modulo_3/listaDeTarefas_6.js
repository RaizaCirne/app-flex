const criarTarefa = (evento) => {

  evento.preventDefault();

  const input = document.querySelector('[data-form-input]'); 
  const valor = input.value; 
  // console.log(valor); -> foi retirado pois agora vai pro corpo da aplicação

  const tarefa = document.querySelector('[data-task]');
  const conteudo = `<p class="content">${valor}</p>`

  tarefa.innerHTML = conteudo; 

  input.value = " "; // pra que? limpar o input no final
}

const novaTarefa = document.querySelector('[data-form-button]');

novaTarefa.addEventListener('click', criarTarefa);



// OBJETIVO 1: Tirar a tarefa que está no console e colocar no corpo da aplicação


// - Ir no index.html: Temos uma li e dentro da li temos um parágrafo e dentro do parágrafo o texto 
// 1º Selecionar a li pra adicionar mais um parágrafo dentro dela, atribuindo um data-task

// 2º - Percorrer o dom:
// document.querySelector()

// 3º - Acessar o data-task:
// document.querySelector('[data-task]'); 

// 4º - Colocar a lista numa variável:
// const tarefa = document.querySelector('[data-task]'); 
// Desta forma, estamos percorrendo o DOM e buscando o li 

// - No index html temos um parágrafo 
// 5º - Criar outro parágrafo com um modelo, um template - tamplate string
// const conteudo = ´<p class="content"></p>´

// 6º - Dentro do parágrafo passar o valor js 
// Interpolar código html com JS 
// OBS: Pra utilizar uma expressão JS dentro do template string, usar ${} e dentro das chaves passar o valor
// ${valor}
// const conteudo = ´<p class="content">${valor}</p>´

// Resumindo: 
// 1 - Selecionamos li 
// 2 - Criamos um modelo de parágrafo 

// 7º Colocar o conteúdo dentro da li 
// Para isso, temos uma propriedade do DOM -> innerHTML 
// innerHTML: Conseguimos acessar o conteúdo da li e colocar o valor que digitamos do campo de input que é um parágrafo
// tarefa.innerHTML = conteudo; 

// Mas aqui só estammos substituindo a tarefa, e não adicionando. 
// Próxima aula: Adicionar uma li que contenha um paragrafo e essa li seja criada uma embaixo da outra toda vez que eu adicionar uma tarefa 