const novaTarefa = document.querySelector('[data-form-button]');
novaTarefa.addEventListener('click', () => {
  console.log('fui clicado')}
  );


// OBJETIVO: A primeira coisa é lidar com o botão, porque ele vai gerar a tarefa. Para isso, percorrer o DOM. 

// 1º Percorrendo o DOM para encontrar o seletor do botão - document.querySelector
// 2º Criar uma variável que representa o botão - const novaTarefa 
// 3º Colocar um escutador no botão - novaTarefa.addEventListener('click')
// 4º Passar argumento do que vai acontecer ao clicar no botão - console.log('fui clicado');
/* 5º Precisaremos de uma ação, por isso, passar uma função anônima que vai ser executada ao clicar no botão - 
('click', () => {console.log('fui clicado')}); */

// PASSO A PASSO - AULA 

// document.querySelector -> expressão que usamos para percorrer o DOM
// Passamos para o DOM o seletor que queremos encontrar 

// Podemos selecionar elementos pela tag, pela class e pelo id, mas podemos selecionar através de um outro seletor chamado data-attributes. 
// Nesse projeto, o data attributes está servindo como separador de responsabilidades 

// Para selecionar o data attributes, usamos aspas e colchetes e o nome do data-attributes '[data-form-button]'
// Como vamos usar essa expressão em outros lugares do código, colocamos ela dentro de uma variável. Como essa variável não vai variar, ela vai ser uma constante - const novaTarefa = document.querySelector('[data-form-button]');

// Como saber se estamos capturando o botão? 
// console.log(novaTarefa) e verificar no console na ferramenta do desenvolvedor. Lá é preciso aparecer o botão com o data-attributes e o novo item. Assim sabemos que capaturamos o botão. 

// Como vamos interagir com o botão? 
// A gente clica no botão e espera que ele faça alguma coisa 
// Precisamos colocar no botão um escutador que vai ficar escutando se a gente clicou ou não, e quando a gente clicar ele vai realizar uma ação. 
// Para lidar com o escutador, precisamos de três elementos: 
// 1º precisamos do EVENTO, que nesse caso vai ser o evento de click -- 'click'
// 2º Aonde vamos colocar esse evento. Vamos ficar escutando evento aonde? Vamos ficar escutando o evento no BOTÃO, que é a novaTarefa -- novaTarefa.
// 3º O que vai acontecer depois que a gente clicar no botão? Quero que o botão fale que foi clicado -- console.log('fui clicado)
// RESUMINDO: 
// 1º Temos o evento -- 'click'
// 2º Temos o botão -- novaTarefa
// 3º Temos o que queremos que aconteça depois de clicar -- console.log('fui clicado)

// Agora sabemos que estamos trabalhando com objetos e eles vão ter vários métodos para nos auxiliar
// Temos aqui o método que vai ficar ouvindo esse evento -- addEventListener()

// Chamamos o botão -- novaTarefa.addEventListener() que é o método que vai ficar escutando o evento
// Passamos dentro dele o evento que é o 'click' -- novaTarefa.addEventListener('click') 
// Como segundo argumento, passamos o console.log -- console.log('fui clicado') 
// Fica assim -- novaTarefa.addEventListener('click', console.log('fui clicado'))

// No segundo argumento precisamos de uma ação, então vamos passar uma função anônima que vai ser executada assim que clicarmos no botão. ()=> {}

// Elemento -- novaTarefa
// Método que vai ficar ouvindo -- addEventListener
// Evento de click -- 'click' 
// Função anônima para quando o clique acontecer executar a função -- ()=> {} 
// O que será exibido -- console.log('fui clicado')


