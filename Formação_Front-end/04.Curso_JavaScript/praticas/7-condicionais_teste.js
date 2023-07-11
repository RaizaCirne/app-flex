const listaConsultorio = new Array(`SUS`, `Particular`);

const nome = "Raíza"; 
const idade = 15; 
const residenciaEmSaoPedroDaAldeia = false; 
const cidade = "São Pedro da Aldeia";
const estaAcompanhado = true;

console.log("Escolha sua opção de convênio: \n"); 
console.log("Convênios: ", listaConsultorio);


// SUS 

if (residenciaEmSaoPedroDaAldeia == true && idade >= 18) {
  console.log("Olá,", nome, "Você está apto(a) para se consultar pelo SUS na cidade de", cidade);
} else if (residenciaEmSaoPedroDaAldeia == true && estaAcompanhado == true) {
  console.log(nome, "você é menor de idade, mas está apto a ser atendida pelo SUS na cidade de", cidade, "por estar acompanhado(a) do responsável!")
} else if (residenciaEmSaoPedroDaAldeia == false && idade >=18) {
  console.log("Olá,", nome, "Você está apto(a) para se consultar pelo consutório particular na cidade de", cidade);
} else if (idede <= 18) {
  console.log(nome, "você precisa estar acompanhado do responsável para se consultar no particular!");
} else {
  console.log("a")
}



// Condições:

//SUS: 
// Precisa residir em São Pedro da Aldeia e ser maior de idade para o SUS 
// Precisa residir em São Pedro da Aldeia e se for menor de idade, estar acompanhado para o SUS 

// PARTICULAR: 
// Pode residir em qualquer localidade
// Precisa ser maior de idade para o particular, se for menor de idade, estar acompanhado para o particular
// Se for menor de idade e não estiver acompanhado não pode se consultar


