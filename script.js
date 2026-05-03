const mensagem = document.getElementById("mensagem");

const tabelaValores = { 
    "euro": { "valor": 5.87, "sigla": "€" },
    "dolar": { "valor": 5.02, "sigla": "US$" } 
};

function calcularConversao(valorReal, taxaMoeda) {
    return valorReal / taxaMoeda;
}

function converter() {
    const moedaSelecionada = document.getElementById("moedas").value;
    const valorInput = document.getElementById("valor").value;
    
    const corErro = "rgb(201, 67, 26)";
    const corSucesso = "rgb(46, 201, 26)";
    
    const moeda = tabelaValores[moedaSelecionada];
    const valorParaConverter = parseFloat(valorInput);

    if (!moeda) {
        mensagem.textContent = "Por favor, selecione uma moeda válida.";
        mensagem.style.color = corErro;
        return;
    }

    if (isNaN(valorParaConverter) || valorParaConverter <= 0) {
        mensagem.textContent = "Por favor, insira um valor numérico positivo.";
        mensagem.style.color = corErro;
        return;
    }

    const resultado = calcularConversao(valorParaConverter, moeda.valor);

    mensagem.textContent = `Valor convertido: ${moeda.sigla}${resultado.toFixed(2)}`;
    mensagem.style.color = corSucesso;
}

// TESTES UNITÁRIOS
function executarTestes() {
    console.log("Iniciando testes...");

    // Teste Euro: 100 / 5.87 ≈ 17.0357...
    const resEuro = calcularConversao(100, tabelaValores.euro.valor);
    console.assert(resEuro.toFixed(2) === "17.04", `Erro Teste Euro: Esperado 17.04, obtido ${resEuro.toFixed(2)}`);

    // Teste Dólar: 100 / 5.02 ≈ 19.9203...
    const resDolar = calcularConversao(100, tabelaValores.dolar.valor);
    console.assert(resDolar.toFixed(2) === "19.92", `Erro Teste Dólar: Esperado 19.92, obtido ${resDolar.toFixed(2)}`);

    console.log("Testes finalizados!");
}