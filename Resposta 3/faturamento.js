// Meu código desafio 3 - Análise de faturamento
// Usando o JSON como base, porque achei mais prático

// Dados do faturamento (copiei do segundo documento JSON que foi passado no email)
const faturamentoMensal = [
    { "dia": 1, "valor": 22174.1664 },
    { "dia": 2, "valor": 24537.6698 },
    { "dia": 3, "valor": 26139.6134 },
    { "dia": 4, "valor": 0.0 },
    { "dia": 5, "valor": 0.0 },
    { "dia": 6, "valor": 26742.6612 },
    { "dia": 7, "valor": 0.0 },
    { "dia": 8, "valor": 42889.2258 },
    { "dia": 9, "valor": 46251.174 },
    { "dia": 10, "valor": 11191.4722 },
    { "dia": 11, "valor": 0.0 },
    { "dia": 12, "valor": 0.0 },
    { "dia": 13, "valor": 3847.4823 },
    { "dia": 14, "valor": 373.7838 },
    { "dia": 15, "valor": 2659.7563 },
    { "dia": 16, "valor": 48924.2448 },
    { "dia": 17, "valor": 18419.2614 },
    { "dia": 18, "valor": 0.0 },
    { "dia": 19, "valor": 0.0 },
    { "dia": 20, "valor": 35240.1826 },
    { "dia": 21, "valor": 43829.1667 },
    { "dia": 22, "valor": 18235.6852 },
    { "dia": 23, "valor": 4355.0662 },
    { "dia": 24, "valor": 13327.1025 },
    { "dia": 25, "valor": 0.0 },
    { "dia": 26, "valor": 0.0 },
    { "dia": 27, "valor": 25681.8318 },
    { "dia": 28, "valor": 1718.1221 },
    { "dia": 29, "valor": 13220.495 },
    { "dia": 30, "valor": 8414.61 }
];

// Função principal pra analisar o faturamento
function analisaFaturamento(dados) {
    // Passo 1: Filtrar dias com faturamento (ignorar zeros)
    const diasComFaturamento = dados.filter(item => item.valor > 0);
    console.log(`Dias com faturamento: ${diasComFaturamento.length} (excluí os zeros)`);

    // Passo 2: Pegar menor e maior valor
    const valores = diasComFaturamento.map(item => item.valor);
    const menorFaturamento = Math.min(...valores);
    const maiorFaturamento = Math.max(...valores);

    // Passo 3: Calcular a média só dos dias com faturamento
    const somaTotal = valores.reduce((acc, curr) => acc + curr, 0);
    const mediaMensal = somaTotal / diasComFaturamento.length;

    // Passo 4: Contar dias acima da média
    const diasAcimaMedia = diasComFaturamento.filter(item => item.valor > mediaMensal).length;

    // Resultados
    return {
        menor: menorFaturamento.toFixed(2),
        maior: maiorFaturamento.toFixed(2),
        diasAcima: diasAcimaMedia,
        media: mediaMensal.toFixed(2),
        mensagem: `Menor faturamento foi R$${menorFaturamento.toFixed(2)}, o maior foi R$${maiorFaturamento.toFixed(2)}. Tivemos ${diasAcimaMedia} dias acima da média de R$${mediaMensal.toFixed(2)}.`
    };
}

// Executando e mostrando o resultado
const resultado = analisaFaturamento(faturamentoMensal);
console.log("--- Resultado da Análise ---");
console.log(`Menor valor: R$${resultado.menor}`);
console.log(`Maior valor: R$${resultado.maior}`);
console.log(`Dias acima da média: ${resultado.diasAcima}`);
console.log(`Média mensal (só dias com faturamento): R$${resultado.media}`);
console.log(resultado.mensagem);