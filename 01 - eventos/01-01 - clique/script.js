function clicou() {
    document.getElementById('titulo').innerText = 'Obrigado!'
}

function digitou(e) {
    if(e.keyCode == 13 && e.crtlKey == true) {
        let texto = document.getElementById('campo').value;
        console.log(texto)
    }
}