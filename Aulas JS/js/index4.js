// Uma função JS é executada quando "algo" a invoca (chama-a).

//Função de soma
function soma(valor1, valor2){
    return valor1 + valor2;
}

document.getElementById("texto").innerHTML = soma(10, 10);

//Função de cotação do dolar
function realParaDolar(real, cotacaoDolar){
    return real * cotacaoDolar;
}
var valorReal = 7.89;
var cotacao = 5.67;

var total = realParaDolar(valorReal, cotacao);
alert ("O valor em reais é : R$"+valorReal +", e o valor em dolar é : U$"+total);

function alertaHello(){
    alert("Olá Pessoal !!!");
}

//Função transformar Celsius em Fahrenheit
function paraCelsius(valorFahrenheit){
    return (5 / 9) * (valorFahrenheit - 32);
}
var x = paraCelsius(77);
alert("A temperatura é de "+x+ "graus celsius");
