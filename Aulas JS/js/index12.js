/* Classes em JavaScript

Em 2015 foi introduzido no JavaScript as Classes. As classes são um conceito antigo em programação e várias linguagens utilizam elas. Mas no Javascript
isso é relativamente novo, por isso mesmo programadores experientes não sabem muito bem utilizar.

Basicamente, as classes são como "fabricas" para criar objetos.
Pode se dizer que são "funções especiais" para criação de objetos.

Assim como fábrica da vida real precisa das máquinas para construir os objetos, as Classes no Javascript usam um método chamado constructor() para 
fabricar os obejtos.

 */

const carro = {
    marca: "Fiat",
    modelo: "Uno",
    ano: 2001
}
// Construindo a classe Carro
class Carro{
    constructor(valor1,valor2,valor3){
        this.marca = valor1;
        this.modelo = valor2;
        this.ano = valor3;
    }
    // Pasasndo um método
    buzina() {
        return this.modelo + " buzinou: Biiiiiiiiiiiiii";
    }
}
// construindo um novo Carro
const uno = new Carro("Fiat", "Uno", 2001);
const gol = new Carro("Volkswagem", "Gol", 2013);
console.log(uno);
console.log(gol.buzina());
// mudando um parâmetro de uma classe (a partir dessa lina o valor da propriedade é 2014)
gol.ano = 2014;
console.log(gol);