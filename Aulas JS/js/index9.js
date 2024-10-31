/* Switch

É usado para realizar diferentes ações com base em diferentes condições no mesmo bloco de verificação. Caso a condição não 
seja compatível não será executada e o valor padrão será adicionado.

*/

switch (expressao) {
    case a:
        // o que acontece
        break;
    case b:
        // o que acontece
        break;
    case c:
        // o que acontece
        break;
    default:
    // o que acontece
}

function verificarCor() {
    let cor = document.getElementById("cor").value;
    cor = cor.toLowerCase(); //deixa tudo digitado como minúsculo

    switch (cor) {
        case "azul":
            document.body.style.backgroundColor = "blue";
            break;
        case "vermelho":
            document.body.style.backgroundColor = "red";
            break;
        case "amarelo":
            document.body.style.backgroundColor = "yellow";
            break;
        default:
        document.getElementById("texto").innerHTML = "Nenhuma cor disponível para: " + cor;
    }
}

function diaDaSemana() {
    var dia = new Date().getDay();

    switch (dia) {
        case 0:
            document.getElementById("texto2").innerHTML = "Hoje é Domingo";
            break;
        case 1:
            document.getElementById("texto2").innerHTML = "Hoje é Segunda";
            break;
        case 2:
            document.getElementById("texto2").innerHTML = "Hoje é Terça";
            break;
        case 3:
            document.getElementById("texto2").innerHTML = "Hoje é Quarta";
            break;
        case 4:
            document.getElementById("texto2").innerHTML = "Hoje é Quinta";
            break;
        case 5:
            document.getElementById("texto2").innerHTML = "Hoje é Sexta";
            break;
        case 6:
            document.getElementById("texto2").innerHTML = "Hoje é Sabado";
            break;
        default:
            document.getElementById("texto2").innerHTML = "Não sei que dia é...";
    }
}