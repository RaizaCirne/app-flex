var etanol, gasolina; 

function calcular() {
  // Pegando valor do input e armazenando nas variáveis
  etanol = parseFloat(frmFlex.valorEtanol.value.replace(",","."));
  gasolina = parseFloat(frmFlex.valorGasolina.value.replace(",","."));
  if (etanol < 0.7 * gasolina) {
    document.getElementById("imagens").src="assets/images/etanol.png";
  } else {
    document.getElementById("imagens").src="assets/images/gasolina.png";
  }
}

function resetar() {
  document.getElementById("imagens").src="assets/images/neutro.png";
}