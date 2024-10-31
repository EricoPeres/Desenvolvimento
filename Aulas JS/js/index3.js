/* Vamos entender Operados:
-> Os operadores são usados para atribuir valores, comparar valores, executar operações aritméticas e muito mais.

São os sinais que usamos: + - * / = ++ -- -= && || etc...
São separados em 6 "categorias":

1) Operadores Aritméticos
2) Operadores de Atribuição
3) Operadores de Sequência
4) Operadores de Comparação
5) Operadores Condicionais (Ternário)
6) Operadores Lógicos

*/

var valor1, valor2, total;
valor1 = 5;
valor2 = 2;

total = --valor1 //decremento -- incremento ++
alert(total);
alert('O valor1 ficou: ' + valor1);

var valor3, valor4, total; //Operadores de Comparação
valor3 = 8;
valor4 = 8;

total = (valor3 == valor4); //true ou false
alert(total)

var idade, eleitor;  //Operadores Condicionais
idade = 18;
eleitor = (idade < 18) ? "não é eleitor": "sim é eleitor";
alert('A resposta é: ' + eleitor);

var idade, eleitor;  //Operadores Lógicos (mais de uma condição)
idade = 60;
eleitor = (idade < 18) ? "não é eleitor": "sim é eleitor";
resultado1 = (idade > 60 && idade <70); //true //false
resultado2 = (idade === 60 || idade ===70); //true //false
resultado3 = !(idade === 60); //negação, retorna true ou false
alert(resultado3);