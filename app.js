function sortear() {
  let quantidade = parseInt(document.getElementById("quantidade").value);
  let numeroInicial = parseInt(document.getElementById("de").value);
  let numeroFinal = parseInt(document.getElementById("ate").value);
  let listaDeNumeros = [];
  let numero;

  for (let i = 0; i < quantidade; i++) {
    numero = obterNumeroAleatorio(numeroInicial, numeroFinal);

    while (listaDeNumeros.includes(numero)) {
      numero = obterNumeroAleatorio(numeroInicial, numeroFinal);
    }
    listaDeNumeros.push(numero);
    let mostrarNumero = document.getElementById("resultado");
    mostrarNumero.innerHTML = ` <label class="texto__paragrafo">Números sorteados:${listaDeNumeros}</label>`;

    
    
  }
  alteraBotao();
}

function obterNumeroAleatorio(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min + 1);
}

function limparCampo() {
  listaDeNumeros = document;
}

function alteraBotao(){
   let botao =  document.getElementById('btn-reiniciar');
   if(botao.classList.contains("container__botao-desabilitado")){
    botao.classList.remove("container__botao-desabilitado");
    botao.classList.add("container__botao");
   }else{
    botao.classList.remove("container__botao");
    botao.classList.add("container__botao-desabilitado");
   }

}

function reiniciar(){

    document.getElementById("quantidade").value = ' ';
     document.getElementById("de").value = ' ';
     document.getElementById("ate").value = ' ';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'
    alteraBotao();
}

