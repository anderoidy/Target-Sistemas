// Desafio 5 - Inversão de string
// Sem usar reverse 

// Função pra inverter a string
function inverteString(texto) {
    // Transformo a string em um array de caracteres (sem usar split)
    let caracteres = [];
    for (let i = 0; i < texto.length; i++) {
        caracteres.push(texto[i]);
    }
    
    // string invertida passo a passo
    let invertida = '';
    for (let j = caracteres.length - 1; j >= 0; j--) {
        invertida += caracteres[j];
    }

    return invertida;
}

// Opção 1: String pré-definida pra testar rápido
const stringFixa = "Distribuidora Topizera";
console.log(`String original: ${stringFixa}`);
console.log(`String invertida: ${inverteString(stringFixa)}`);

// Opção 2: Entrada dinâmica via terminal (opcional)
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Digite uma string pra inverter (ou aperte Enter pra usar a padrão): ', (input) => {
    const texto = input.trim() === '' ? stringFixa : input;
    console.log(`Você digitou: ${texto}`);
    console.log(`Invertida fica: ${inverteString(texto)}`);
    readline.close();
});
