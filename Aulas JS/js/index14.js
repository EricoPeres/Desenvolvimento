/** 
 * Json significa JavaScript Object Notation que traduzido pro português fica algo como Notação de Objeto JavaScript.
 *  
 * Explicando de um modo simples Json é basicamente uma forma de converter um objeto em texto e o contrário também, um texto em um objeto.
 * 
 * Ele é usado principalmente para transmitir dados entre sistemas de forma simples, já que o formato de texto é lido por praticamente
 * toda linguageum de programação.
 * 
 * Para trabalhar com Json no JavaScript usamos dois métodos:
 * 
 * Json.parse() -> Converte texto no padrão Json em objetos
 * Json.stringify() -> Converte objetos em texto padrão Json
 * 
 * */

//Objeto carro
const carro = {
    marca: "Fiat",
    modelo: "Uno",
    ano: 2001,
    motor: ["1.0", "1.4", "1.6"]
}

// transformando de objeto para texto
let texto = JSON.stringify(carro);

document.getElementById('area').innerHTML = texto;

//transformando de texto para objeto
let obj = JSON.parse(texto);
console.log(obj.modelo);
console.log(obj.motor[2]);


//Trabalhando na prática
const ajax = new XMLHttpRequest();
ajax.open('GET', 'https://viacep.com.br/ws/72440470/json/');
ajax.send();

ajax.onload = function () {
    document.getElementById('area2').innerHTML = this.responseText;
    let obj = JSON.parse(this.responseText);
    alert(obj.ddd);
}

function buscarCEP(){
    let input = document.getElementById('cep').value;

    const ajax = new XMLHttpRequest();
    ajax.open('GET', 'https://viacep.com.br/ws/' + input + '/json/');
    ajax.send();

    ajax.onload = function () {
        //document.getElementById('texto').innerHTML = this.responseText;

        //transformei o texto em objeto
        let obj = JSON.parse(this.responseText);
        //aqui peguei os valores que eu queria
        let logradouro = obj.logradouro;
        let cidade = obj.localidade;
        let estado = obj.uf;

        document.getElementById('texto').innerHTML = "Logradouro: " + logradouro + "<br> Cidade: " + cidade + "<br> Estado: " + estado;
}

}