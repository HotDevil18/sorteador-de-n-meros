function sortear() {
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let doNumero = parseInt(document.getElementById("de").value);
    let ateONumero = parseInt(document.getElementById("ate").value);
    // parseInt() converte as strings em números.
    if (doNumero >= ateONumero) {
        alert("O número 'DO' deve ser menor do que o número 'Até'.");
        return;
    };
    let numerosSorteados = [];
    let numeroseEscolhidos;
    for (let i = 0; i < quantidade; i++) {
        numeroseEscolhidos = obterNumeroAleatorio(doNumero, ateONumero);
        while (numerosSorteados.includes(numeroseEscolhidos)) {
            numeroseEscolhidos = obterNumeroAleatorio(doNumero, ateONumero);
        };
        numerosSorteados.push(numeroseEscolhidos);
    };

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${numerosSorteados}</label>`;
    alterarStatusBotao();
};

function obterNumeroAleatorio(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function alterarStatusBotao() {
    let botão = document.getElementById("btn-reiniciar");
    if (botão.classList.contains("container__botao-desabilitado")) {
        botão.classList.remove("container__botao-desabilitado");
        botão.classList.add("container__botao");
    } else {
        botão.classList.remove("container__botao");
        botão.classList.add("container__botao-desabilitado");
    };
};

function reiniciar() {
    document.getElementById("quantidade").value = "";
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";
    document.getElementById("resultado").innerHTML = `<label class="texto__paragrafo">Números sorteados: nenhum número sorteado até agora</label>`;
    alterarStatusBotao();
};