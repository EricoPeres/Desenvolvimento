/* Arrays
Os arrays JS são usados para armazenar vários valores em uma única variável. Diferente dos objetos, que funcionam
com propriedades ou "nomes" que você dá para os itens dentro dele, os arrays não possuem propriedades. O item dentro
dele é encontrado pela posição.
                    //0        //1       //2         //3
Ex: const lista = ["arroz", "feijão", "macarrão", "leite"];
ou: const lista = new Array("arroz", "feijão", "macarrão", "leite")

*/

const lista = ["arroz", "feijão", "macarrão", "leite"];
let x = lista[3];
alert(x);

// mudando itens de uma matriz
lista[0] = "Café";
alert(lista[0]);
console.log(lista);

const pessoa1 = ["Dimitri", "Teixeira", 30]; //Array
const pessoa2 = {nome:"Dimitri", sobrenome:"Teixeira", idade:30}; //Objeto

pessoa1[0]; //chamar um elemento de uma array
pessoa2.nome; //chamar um elemento de um objeto

alert(pessoa1.length); //quantos itens na array (3)
alert(pessoa1[pessoa1.length -1]); //último item da array

pessoa1.push("Brasileiro"); //adicionar um item a array
console.log(pessoa1);

alert(Array.isArray(pessoa1));

// método pop (remover o último item da matriz)
pessoa1.pop();

// método shift (remover o primeiro item da matriz)
pessoa1.shift();

// método unshift (adicionar o primeiro item da matriz)
pessoa1.unshift("Bonitão");

// método delete (vai deletar uma posição na matriz, mas não altera a ordem dos itens)
delete pessoa1[1];

// método splice (adiciona ou remove um ou vários itens em uma posição específica)
pessoa1.splice(1,0, "Item adicionado 1", "Item adicionado 2");

// método join
document.getElementById("texto").innerHTML = pessoa1.join(" - ")

const lista1 = ["Arroz", "feijão", "leite", "macarrão"];
const lista2 = ["Suco", "refrigerante", "carne"];
const lista3 = ["Salgadinho"];

// método concat (concatenar matrizes)
const superLista = lista1.concat(lista2, lista3);

document.getElementById("texto2").innerHTML = superLista;

const jogadores = ["Biro Biro", "Ribamar", "Pelé", "Maradona", "Neymar", "Messi", "Cristiano Ronaldo", "Vampeta", "Erico"];

// método slice (fatiar uma lista a partir de uma posição)
const craques = jogadores.slice(2,6);

document.getElementById("texto3").innerHTML = craques;

// método sort (colocar uma matriz em ordem alfabética (reverse: fica na ordem inversa))
const jogOrdem = jogadores.sort();

document.getElementById("texto4").innerHTML = jogOrdem;

const numeros = [40,100,1,5,25,45,10];

// para deixar uma array em ordem numérica precisa fazer uma função de retorno, igual a abaixo
numeros.sort(function(a,b){return a-b});

document.getElementById("texto5").innerHTML = numeros;

// pegar o maior número de uma matriz
function MaiorNumero(array) {
    return Math.max.apply(null, array);
}

document.getElementById("texto6").innerHTML = MaiorNumero(numeros);

// pegar o menor número de uma matriz
function MenorNumero(array) {
    return Math.min.apply(null, array);
}

document.getElementById("texto7").innerHTML = MenorNumero(numeros);

// filtragem de números de uma array
const maior20 = numeros.filter(filtragem);

function filtragem(value, index, array) {
    return value > 20;
}

document.getElementById("texto8").innerHTML = maior20;