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
  botaoConlui.addEventListener('click',() => {
    console.log('Fui clicado!');
  } )

  return botaoConlui
}

// OBJETIVO 1: 