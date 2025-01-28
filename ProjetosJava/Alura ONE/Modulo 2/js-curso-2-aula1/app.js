let listaNumerosSorteados = [];
let limiteLista = [100];

function exibirNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;

    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function gerarNumero(){
    let numeroEscolhido = parseInt(Math.random() * limiteLista + 1);

    if (listaNumerosSorteados.length == limiteLista){
        listaNumerosSorteados = [];
    }

    if (listaNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumero();
    }else{
        listaNumerosSorteados.push(numeroEscolhido);
        console.log(listaNumerosSorteados);
        return numeroEscolhido;
    }  

}

function verificarChute(){
    let chute = document.querySelector('input').value;

    if (chute == numeroAleatorio){
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Você descobriu o numero aleatório em ${tentativas} ${palavraTentativa}`;

        exibirNaTela('h1', 'Parabéns!!!!');
        exibirNaTela('p', mensagemTentativa);

        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if(chute > numeroAleatorio){
            exibirNaTela('p', 'O número aleatório é menor');
        }else{
            exibirNaTela('p', 'O número aleatório é maior');
        }
        limparCampo();
        tentativas++;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';

}

function novoJogo(){
    numeroAleatorio = gerarNumero();
    tentativas = 1;

    limparCampo();
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);

}

function exibirMensagemInicial(){
    exibirNaTela('h1', 'Jogo de Adivinhação');
    exibirNaTela('p', `Escolha um número de 1 a ${limiteLista}`);
}


let numeroAleatorio = gerarNumero();
let tentativas = 1;
exibirMensagemInicial();

