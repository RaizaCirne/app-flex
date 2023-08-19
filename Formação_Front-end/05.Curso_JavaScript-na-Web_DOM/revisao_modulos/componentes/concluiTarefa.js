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

export default BotaoConlui