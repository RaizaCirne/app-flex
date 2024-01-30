var etanol, gasolina; 

function calcular() {
  // Pegando valor do input e armazenando nas variáveis
  etanol = parseFloat(frmFlex.valorEtanol.value.replace(",","."));
  gasolina = parseFloat(frmFlex.valorGasolina.value.replace(",","."));
  // condição 
  // se o valor do etanol custar até 70% o valor da gasolina, etanol, senão, gasolina.
  if (etanol < 0.7 * gasolina) {
    document.getElementById("imagens").src="assets/images/etanol.png";
  } else {
    document.getElementById("imagens").src="assets/images/gasolina.png";
  }
}

// voltando a imagem para neutro
function resetar() {
  document.getElementById("imagens").src="assets/images/neutro.png";
}