/* Eventos de tempo com JavaScript

Os eventos de tempo permitem a execução do código em intervalos de tempo especificados. Esses intervalos de tempo são chamados de eventos de cronometragem.

Os dois métodos-chave para usar com JavaScript são:

setTimeout (function, tempo em milisegundos)
-> Executa um função, depois de esperar um número especificado de milisegundos.

setInterval(function, milisegundos)
-> É o mesmo que setTimeout(), mas repete a execução da função continuamente.

*/

function ativarContagem() {
    document.getElementById('tempo').innerHTML = "Começou a contar!";
    // Ativa a função apenas uma vez quando o der o tempo especificado
    tempo = setTimeout(function () {
        document.getElementById('tempo').innerHTML = "Executou o setTimeout";
    }, 8000);
}

function pararContagem() {
    clearTimeout(tempo);
    document.getElementById('tempo').innerHTML = "Parou a contagem";
}

function ativarContagem2() {
    tempo = setInterval(function () {
        var cronometro = document.getElementById('tempo2').innerHTML;
        var soma = parseInt(cronometro) + 1;
        document.getElementById('tempo2').innerHTML = soma;
    }, 1000);
}

function pararContagem2() {
    clearInterval(tempo);
}

// Contagem regressiva
function ativarContagem3() {
    tempo = setInterval(function () {
        var cronometro = document.getElementById('tempo3').innerHTML;
        var soma = parseInt(cronometro) - 1;

        if (soma === 0) {
            document.getElementById('tempo3').innerHTML = "Tempo Esgotado";
            pararContagem3();
        } else {
            document.getElementById('tempo3').innerHTML = soma;
        }
        
    }, 1000);
}

function pararContagem3() {
    clearInterval(tempo3);
}

