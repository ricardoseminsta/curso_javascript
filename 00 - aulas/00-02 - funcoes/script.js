function alterar() {
    document.getElementById("titulo").innerHTML = "Trocou o título!";
    document.getElementById("campo").value = "Trocou o campo!";
}

function alterarPar(titulo) {
    document.getElementById("titulo").innerHTML = titulo;
    document.getElementById("campo").value = titulo;
}

function somar(x, y) {
    let total = x + y;

    return total;
}

var resultado = somar(10, 51)