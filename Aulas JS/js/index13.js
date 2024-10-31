/** Manipular datas em JavaScript */

// Comando base para pegar a data
let data = new Date();
console.log(data);

//pegar o ano atual com digitos 
let ano = data.getFullYear();
console.log(ano);

//pegar o mes atual - de 0 até 11 sendo 0 janeiro e 11 dezembro
let mes = data.getMonth();
console.log(mes);

const mesesDoAno = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
let mesEcrito = mesesDoAno[data.getMonth()];
console.log(mesEcrito);

//pegar o dia do mês - 1 até 31
let diaMes = data.getDate();
console.log(diaMes);

//pegar o dia da semana - 0 a 6
let diaSemana = data.getDay();
console.log(diaSemana);

const diasDaSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
let diaSemanaEscrito = diasDaSemana[data.getDay()];
console.log(diaSemanaEscrito);

//pegar a hora - 0 até 23
let hora = data.getHours();
console.log(hora);

//pegar os minutos - 0 até 59
let minutos = data.getMinutes();
console.log(minutos);

//pegar os segundos - 0 até 59
let segundos = data.getSeconds();
console.log(segundos);

//pegar os milisegundos - 0 até 999
let milisegundos = data.getMilliseconds();
console.log(milisegundos);

//pagar a data no formato padrão brasileiro - dia/mês/ano
let dataBR = data.toLocaleString('pt-BR', {dateStyle: 'short'}); //paga pegar só a hora {timeStyle: 'short'}
console.log(dataBR);

//pegando os valores separados
d = new Date();
diaMes = d.getDate();
mes = d.getMonth() + 1;
ano = d.getFullYear();

//para adicionar o zero nos meses/dias menores que 10
function addZero(x) {
    return x < 10 ? '0' + x : '' + x;
};

let dataPadraoBR = addZero(diaMes) + "/" + addZero(mes) + "/" + ano;
console.log(dataPadraoBR);
 
//comparar datas - maior ou menor. Ex: vencimentos
var hoje = new Date();
var vencimento = new Date(2024, 8, 15); //no formato que o JavaScript compreende

if (hoje > vencimento) {
    console.log("Sua conta está vencida!");
} else {
    console.log("Ainda não venceu, tudo certo!");
}

//diferença em dias entre duas datas
var dataInicial = new Date();
var dataFinal = new Date(2024,11,31);

var diferencaTempo = dataFinal.getTime() - dataInicial.getTime();

var diferencaDias = Math.ceil(diferencaTempo / (24 * 60 * 60 * 1000));
console.log(diferencaDias + " dias");