const criarTarefa = (evento) => {
  evento.preventDefault();
  const input = document.querySelector("[data-form-input]"); // capturando valor dentro do campo de input
  const valor = input.value;
  console.log(valor);
  input.value = " ";
};

const novaTarefa = document.querySelector("[data-form-button]"); // capturando o botão

// novaTarefa - elemento
//.addEventListener - método que fica ouvindo
// click - evento de click
// ()=> { console.log('fui clicado')}) - quando click acontecer, executa essa função que vai exibir o console.log

novaTarefa.addEventListener("click", criarTarefa);

// clico no botão --- click
// executa função --- () =>
// percorre o DOM e busca o input --- const input = document.querySelector("[data-form-input]")
// Pega o valor dentro do input e coloca no console.log e exibe no navegador --- const valor = input.value;
