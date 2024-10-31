/* Laço de Repetição For
Laços oferecem um jeito fácil e rápido de executar uma ação repetidas vezes.
*/

for (let i = 0; i < 10001; i++) {
    document.getElementById("texto").innerHTML += i + ", ";
}

var ano = new Date().getFullYear(); // sempre pegar o ano corrente

for (let i = ano; i >= 1900; i--) {
    document.getElementById("ano").innerHTML += "<option value='"+i+"'>"+i+"</option>";
}

const carros = ["Gol", "Fusca", "Brasília", "Del Rey", "Chevette", "Opala"];
var tamanho = carros.length;

for(let i = 0; i<tamanho; i++) {
    document.getElementById('texto2').innerHTML +=carros[i] + " - ";
}