function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let sorteados = [];

    if(de >= ate){
        alert('Por favor, insira um intervalo válido.')
        return;
    }

    if(quantidade > (ate - de + 1)){
        alert(`Não é possível encontrar ${quantidade} números entre o intevalo determinado.`)
        return;
    }
    
    for (let i = 0; i < quantidade; i++){
            
        numero = obterNumeroAleatorio(de, ate);

        while(sorteados.includes(numero)){
            numero = obterNumeroAleatorio(de, ate);
        }
        sorteados.push(numero);
        }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`
    alterarBotao();
}

function obterNumeroAleatorio(min, max) {
    let numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    return numeroAleatorio;
}

function alterarBotao() {
    let statusBotao = document.getElementById('btn-reiniciar');

    if (statusBotao.classList.contains('container__botao-desabilitado')){
        statusBotao.classList.remove('container__botao-desabilitado')
        statusBotao.classList.add('container__botao')
    }else{
        statusBotao.classList.add('container__botao-desabilitado')
        statusBotao.classList.remove('container__botao')
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = ''
    document.getElementById('de').value = ''
    document.getElementById('ate').value = ''

    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`
}