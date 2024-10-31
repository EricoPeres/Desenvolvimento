/* Os valores dentro de um objeto são chamados propriedades.

Os Objetos também podem ter métodos. Um método é uma função colocada dentro de uma propriedade.
*/

const carro={
    marca: "Ford",
    modelo: "Ka",
    ano:2015,
    placa: "ABC-1234",
    buzina:function(){alert('Biiiiiiiiiiiiiiiiiiiiiii')},
    completo: function(){
        return "A marca é " +this.marca+ " e o modelo é: "+this.modelo
    }
};

console.log(carro.placa);
console.log(carro.completo());
carro.buzina();

