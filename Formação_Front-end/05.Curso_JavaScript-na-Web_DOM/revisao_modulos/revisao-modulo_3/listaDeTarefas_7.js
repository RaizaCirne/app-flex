const criarTarefa = (evento) => {

  evento.preventDefault();

  const lista = document.querySelector('[data-list]');

  const input = document.querySelector('[data-form-input]'); 
  const valor = input.value; 

  const tarefa = document.createElement('li');
  tarefa.classList.add('task');
  // const tarefa = document.querySelector('[data-task]') -> variável que está selecionando o data-task não existe mais
  const conteudo = `<p class="content">${valor}</p>` // template que pega o valor do input 

  tarefa.innerHTML = conteudo;

  lista.appendChild(tarefa);
  input.value = " "; 
}

const novaTarefa = document.querySelector('[data-form-button]');

novaTarefa.addEventListener('click', criarTarefa);

// OBJETIVO 1: Criar elementos do DOM 

// Precisamos criar li 
// Ir no index html 
// Se vamos criar li, ela não vai mais ficar estática dentro do html. 

// 1º - Excluir a li 
// 2º - Excluir o parágrafo, pois na lista de tarefas já temos um template que pega o valor do input:
// const conteudo = `<p class="content">${valor}</p>` 

// Manter somente a ul no html 
// 3º Percorrer a árvore do DOM pra encontrar a ul, e fazemos isso usando o data-list

// 4º Excluir variável que está selecionando o data-task que não existe mais -> const tarefa = document.querySelector('[data-task]'); 
// 5º Excluir o tarefa.innerHTML = conteudo que não usamos mais pra nada 

// Agora nada funciona. Então: 

// 1º - Percorrer o DOM e buscar a ul - Criar dentro de uma variável chamada lista: 
//  const lista = document.querySelector('[data-list]'); -> Pegamos a ul 

// Pegamos a ul 
// Agora, existem métodos que conseguimos utilizar pra manipular elementos do DOM 
// Existem métodos pra percorrer a árvore do DOM, e também métodos que criam elementos do DOM: 
// o nome do método que cria é o createElement 
// 2º - Passar o document.creatElement()e dentro do parênteses entre aspas "" passar o elemento que queremos criar que é a li 
// document.creatElement("li");
// 3º - Colocar essa expressão dentro de uma variável:
// const tarefa = document.creatElement("li"); -> A tarefa está criando um elemento li pra gente 

//Temos que colocar o template de parágrafo dentro da li
// 4º - Acessar o conteúdo do elemento 
// tarefa.innerHTML = conteudo -> o conteúdo de tarefa vai receber o conteúdo do parágrafo 

// O DOM é uma representação do html em forma de nós 
// É uma árvore de nós e cada um desses nós representa nosso html 
// Existe hierarquia dentro dessa árvore - hierarquia entre pai e filho 
// Quando a gente tinha a ul, tinha dentro dela a li 
// Significa que a ul é pai do li 
// Objetivo: adicionar um elemento filho dentro de um elemento pai 
// Existe um método que faz isso. Ele anexa um elemento dentro do outro:
// 5º -   lista.appendChild(tarefa) -> lista.appendChild vai receber tarefa - pai recebe filho 

// Estilo quebrado
// Objetivo: Adicionar a classe de css que já tinha antes nessa li 
// 1º - Acessar a lista de classes que esse li disponibiliza
// Para isso, usar propriedade classList 
// tarefa.classList 
// Só temos uma li e ela não tem classe, vamos adicionar classe com o método add 
// tarefa.classList.add() dentro do parenteses passar a classe que quero adicionar 
// tarefa.classList.add('task')


// O comportamento da tarefa ir logo abaixo, ficar embaixo da outra tem relação com o appendChild 
// o appendChild vai sempre colocar a tarefa no final do nó 
// Temos a ul, dentro dela temos uma li e essa ul e li representam nós 
// Então toda vez que adicionar uma nova tarefa, quer dizer que adicionamos um nó
// Então esse nó OU elemento filho vai sempre aparecer por último na lista 

// Adicionamos as tarefas usando o appendChild 