function pgFinalPedido() {
    let pgfinal = document.querySelector(".finalizacao-do-pedido");
    
    pgfinal.classList.toggle("fimpedido");
}

function test() {
    alert("oi");
}

function selectComida(elemento) {
    let pedidoComida = document.querySelector(".comida .pedidoSelecionado");
    if (pedidoComida != null) {
        pedidoComida.classList.remove("pedidoSelecionado");
    }

    elemento.classList.add("pedidoSelecionado");
}

function selectBebida(elemento) {
    let pedidoBebida = document.querySelector(".bebida .pedidoSelecionado");
    if (pedidoBebida != null) {
        pedidoBebida.classList.remove("pedidoSelecionado");
    }

    elemento.classList.add("pedidoSelecionado");
}

function selectSobremesa(elemento) {
    let pedidoSobremesa = document.querySelector(".sobremesa .pedidoSelecionado");
    if (pedidoSobremesa != null) {
        pedidoSobremesa.classList.remove("pedidoSelecionado");
    }

    elemento.classList.add("pedidoSelecionado");
}