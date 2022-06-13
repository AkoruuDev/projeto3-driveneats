function pgFinalPedido() {
    let pgfinal = document.querySelector(".finalizacao-do-pedido");
    
    pgfinal.classList.toggle("fimpedido");
}

function test() {
    alert("oi");
}


let pedidoComida;
let valueordercom;
let pedidoBebida;
let valueorderbeb;
let pedidoSobremesa;
let valueordersob;

function selectComida(elemento) {
    pedidoComida = document.querySelector(".comida .pedidoSelecionado");
    if (pedidoComida != null) {
        pedidoComida.classList.remove("pedidoSelecionado");
    }

    elemento.classList.add("pedidoSelecionado");
    pedidoComida = elemento;

    valueordercom = document.querySelector(".comida .pedidoSelecionado .valueorder");

    pedidoDeFinalizacao();
}

function selectBebida(elemento) {
    pedidoBebida = document.querySelector(".bebida .pedidoSelecionado");
    if (pedidoBebida != null) {
        pedidoBebida.classList.remove("pedidoSelecionado");
    }

    elemento.classList.add("pedidoSelecionado");
    pedidoBebida = elemento;

    valueorderbeb = document.querySelector(".bebida .pedidoSelecionado .valueorder");

    pedidoDeFinalizacao();
}

function selectSobremesa(elemento) {
    pedidoSobremesa = document.querySelector(".sobremesa .pedidoSelecionado");
    if (pedidoSobremesa != null) {
        pedidoSobremesa.classList.remove("pedidoSelecionado");
    }

    elemento.classList.add("pedidoSelecionado");
    pedidoSobremesa = elemento;

    valueordersob = document.querySelector(".sobremesa .pedidoSelecionado .valueorder");

    pedidoDeFinalizacao();
}

function pedidoDeFinalizacao() {
    if (pedidoComida && pedidoBebida && pedidoSobremesa) {
        let desaparecerbotao = document.querySelector(".selecallped");
        desaparecerbotao.classList.add("bottonfim");
        let botaofinalizacao = document.querySelector(".botaodepedido");
        botaofinalizacao.classList.remove("bottonfim");
        botaofinalizacao.classList.add("botaofinalizacao");

        let comidaSelecionada = document.querySelector(".pedidocomidaped");
        comidaSelecionada.innerHTML = pedidoComida;
        let valuecomida = document.querySelector(".pedidocomidavalue");
        valuecomida.innerHTML = valueordercom;
    }   
}