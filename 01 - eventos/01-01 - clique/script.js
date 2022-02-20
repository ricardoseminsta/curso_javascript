function clicou() {
    document.getElementById('titulo').innerText = 'Obrigado!'
}

function digitou(e) {
    if(e.keyCode == 13 && e.ctrlKey == true) {
        let texto = document.getElementById('campo').value;
        console.log(texto)
    }
}

function azul(){
    limpar();
    document.getElementById('titulo').classList.add('azul');
}

function vermelho(){
    limpar();
    document.getElementById('titulo').classList.add('vermelho');
}

function verde(){
    limpar();
    document.getElementById('titulo').classList.add('verde');
}

function limpar() {
    document.getElementById('titulo').classList.remove('vermelho');
    document.getElementById('titulo').classList.remove('azul');
    document.getElementById('titulo').classList.remove('verde');
}

function mostrarTelefone(e) {
    e.style.display = "none";
    document.getElementById('telefone').style.display = "block";
}