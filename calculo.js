// Importando o módulo readline para capturar entrada do usuário no terminal
const readline = require('readline');

// Criando uma interface para ler os inputs
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função que calcula o saldo de vitórias e determina o nível do jogador
function calcularNivel(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    let nivel;

    // Determinando o nível baseado nas vitórias
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return { saldoVitorias, nivel };
}

// Solicitando as vitórias e derrotas do jogador
rl.question('Digite o número de vitórias: ', (vitorias) => {
    rl.question('Digite o número de derrotas: ', (derrotas) => {
        // Convertendo as entradas para inteiros
        vitorias = parseInt(vitorias);
        derrotas = parseInt(derrotas);

        // Calculando o saldo e o nível
        const resultado = calcularNivel(vitorias, derrotas);

        // Exibindo o resultado no terminal
        console.log(`O Herói tem um saldo de ${resultado.saldoVitorias} vitórias e está no nível ${resultado.nivel}.`);

        // Fechando a interface readline
        rl.close();
    });
});
