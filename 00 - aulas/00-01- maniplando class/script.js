function verde(){
    document.querySelector('#titulo').classList.remove('vermelho');
    document.querySelector('#titulo').classList.remove('azul');
    document.querySelector('#titulo').classList.add('verde');
}

function vermelho(){
    document.querySelector('#titulo').classList.remove('verde');
    document.querySelector('#titulo').classList.remove('azul');
    document.querySelector('#titulo').classList.add('vermelho');
}

function azul(){
    document.querySelector('#titulo').classList.remove('vermelho');
    document.querySelector('#titulo').classList.remove('verde');
    document.querySelector('#titulo').classList.add('azul');
}

function trocar(){
    if(document.querySelector('#trocar').classList.contains('preto')){
        document.querySelector('#trocar').classList.remove('preto');
        document.querySelector('#trocar').classList.add('verde');
    } else {
        document.querySelector('#trocar').classList.remove('verde');
        document.querySelector('#trocar').classList.add('preto');
    }
}