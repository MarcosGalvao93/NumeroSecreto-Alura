let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',
        {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Game do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertouu Mizeravii');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você acertou depois de ${tentativas} ${palavraTentativa}.`; 
                exibirTextoNaTela('p', mensagemTentativas);
                document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela ('p', 'Numero secreto é menor, Burro!');
        } else {
            exibirTextoNaTela ('p', 'Numero secreto é maior, Burro!');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
   let NumeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

if(quantidadeDeElementosNaLista === numeroLimite) {
    listaDeNumerosSorteados = []
}

   if (listaDeNumerosSorteados.includes(NumeroEscolhido)) {
        return gerarNumeroAleatorio();
   } else {
    listaDeNumerosSorteados.push(NumeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return NumeroEscolhido;
   }
}

function limparCampo( ) {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}