// Código desafio 4 - Percentual de faturamento por estado
// Ideia: calcular quanto cada estado representa do bolo total

// Dados do faturamento por estado (valores em reais)
const faturamentoPorEstado = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

// Função pra calcular os percentuais
function calculaPercentuais(faturamento) {
    // Primeiro, somo tudo pra saber o total
    const totalMensal = Object.values(faturamento).reduce((soma, valor) => soma + valor, 0);
    console.log(`Total mensal da distribuidora: R$${totalMensal.toFixed(2)}`);

    // Agora, calculo o percentual de cada estado
    const percentuais = {};
    for (let estado in faturamento) {
        const valor = faturamento[estado];
        const percentual = (valor / totalMensal) * 100;
        percentuais[estado] = percentual.toFixed(2); // Pra ficar com Duas casas 
    }

    // Mensagem final 
    let resultado = "Percentual de cada estado no faturamento total:\n";
    for (let estado in percentuais) {
        resultado += `${estado} com ${percentuais[estado]}% do total!\n`;
    }
    resultado += `Tudo isso soma os 100% do bolo de R$${totalMensal.toFixed(2)}!`;

    return {
        percentuais,
        total: totalMensal.toFixed(2),
        mensagem: resultado
    };
}

// Executando e mostrando o resultado
const analise = calculaPercentuais(faturamentoPorEstado);
console.log("--- Análise do Faturamento por Estado ---");
console.log(`Total: R$${analise.total}`);
console.log(analise.mensagem);
console.log("Detalhamento:", analise.percentuais);