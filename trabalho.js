
function geradorDeTagsDeIdentificacao(nome) {
  return nome.toUpperCase();
}

function verificarSePodeSerAdotado(idade, porte) {
  return idade >= 1 && porte === 'M';
}

function calcularConsumoDeRacao(nome, idade, peso) {
  return peso * 300;
}

function decidirTipoDeAtividadePorPorte(porte) {
  if (porte === 'pequeno') return 'brincar dentro de casa';
  if (porte === 'médio') return 'caminhadas moderadas';
  if (porte === 'grande') return 'corridas e atividades ao ar livre';
  return 'atividade não definida';
}

async function buscarDadoAsync() {
  return new Promise(resolve => {
    setTimeout(() => resolve('Pipoca'), 100);
  });
}
export {
  geradorDeTagsDeIdentificacao,
  verificarSePodeSerAdotado,
  calcularConsumoDeRacao,
  decidirTipoDeAtividadePorPorte,
  buscarDadoAsync   
}