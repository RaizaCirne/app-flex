const criarTarefa = (evento) => {

  evento.preventDefault();

  const input = document.querySelector('[data-form-input]'); 
  const valor = input.value; 
  console.log(valor)

}

const novaTarefa = document.querySelector('[data-form-button]');

novaTarefa.addEventListener('click', criarTarefa);

// O formulário é um dos principais pontos de interação entre usuário e site
// Os formularios permitem que a gente envie dados para servidores web 

// OBJETIVO: No nosso caso, enviar dados no corpo da nossa aplicação que fica logo embaixo de "comprar um abacate"

// O comportamento padrão do formulário vai ser sempre enviar dados 
// Temos um evento associado ao formulário que faz com que sempre que a gente clique no botão, ele envie dados para algum lugar. 

// Sempre que estou trabalhando com eventos quer dizer que eu quero saber mais informações sobre evento
// Então quando coloco um evento de 'click', geralmente quero saber qual elemento estou clicando
// Quando o navegador está lidando com esse tipo de evento, ele passa um objeto que contém informações sobre o evento. 
// Podemos passar o objeto como parâmetro da nossa função 

// Vamos chamar esse objeto de evento
// Ele possui um método chamado preventDefault(), que serve para prevenir o comportamento padrão ->   evento.preventDefault();
// Assim, conseguimos pegar a informação e não vai ter o refresh da página, não recarregou. Isso quer dizer que previnimos o comportamento de enviar o dado para algum lugar. Forçamos o formulário a fazer o que estavamos querendo. 