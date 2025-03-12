// Função para verificar se um número pertence à sequência de Fibonacci
function verificaFibonacci(numero) {
    // Casos iniciais da sequência
    if (numero < 0) {
        return `${numero} não pertence à sequência de Fibonacci, pois a sequência só contém números não negativos.`;
    }
    if (numero === 0 || numero === 1) {
        return `${numero} pertence à sequência de Fibonacci.`;
    }

    // Inicializa os dois primeiros números da sequência
    let a = 0; // Primeiro número
    let b = 1; // Segundo número
    let proximo = a + b; // Próximo número da sequência

    // Calcula a sequência até ultrapassar o número informado
    while (proximo <= numero) {
        if (proximo === numero) {
            return `${numero} pertence à sequência de Fibonacci.`;
        }
        a = b;
        b = proximo;
        proximo = a + b;
    }

    // Se o loop terminar, o número não foi encontrado
    return `${numero} não pertence à sequência de Fibonacci.`;
}

// Teste com um número (você pode mudar o valor aqui)
let numeroInformado = 21; // Exemplo: experimente 0, 1, 2, 3, 5, 8, 13, 21, 34, etc.
console.log(verificaFibonacci(numeroInformado));

// Para entrada dinâmica via terminal (opcional, descomente se quiser usar):
/*
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Digite um número: ', (input) => {
    let numero = parseInt(input);
    console.log(verificaFibonacci(numero));
    readline.close();
});
*/