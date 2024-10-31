/* Eventos

Eventos são ações disparadas pela interação dos usuários na página.
É o correto manejo desses eventos que tornam as página interativas e dinâmicas.

Os eventos mais utilizados são:

onclick => disparado quando recebe um click
ondblclick => disparado quando click duplo
onmouseover => disparado quando o mouse está sobre
onmouseout => disparado quando o mouse sai do objeto
onmousemove => disparado quando o mouse é movido no elemento
onmousedown => disparado quando o click do botão for pressionado
onmouseup = > disparado quando o click do mouse é solto
onfocus => disparado quando o elemento recebe o foco. Válido para input
onchange => disparado quando há uma mudança no conteúdo. "Ao mudar"
onblur => disparado quando o elemento perde o foco
onkeydown => disparado quando uma tecla é pressionada 
onkeypress => disparado quando uma tecla é pressionada e solta
onkeyup => disparado quando uma tecla é solta sobre o elemento
onload => disparado quando a página terminou de ser carregada. Body
onresize => disparado quando há um redimencionamento da janela

*/

function eventoClick(){
    //alert('Acionou um evento de click');
    document.body.style.backgroundColor = "yellow";
}

function eventoDblClick(){
    alert('Evento de clique duplo');
}

function viraVermelho() {
    let div = document.getElementById("teste");
    div.style.backgroundColor = "red";
}

function viraAzul() {
    let div = document.getElementById("teste");
    div.style.backgroundColor = "blue";
}

function adicionaTexto() {
    let p = document.getElementById("texto");
    p.append('O mouse moveu <br>');
}

function limpaTexto() {
    document.getElementById("campoTexto").value = "";
}

function mudou() {
    console.log('Mudou');
}

function teclaPressionada() {
    let input = document.getElementById("campoTexto").value;
    console.log(input);
}