function trocarImagem(filename, animalname) {
    document.querySelector('.imagem').setAttribute('src', 'images/'+filename);
    document.querySelector('.imagem').setAttribute('data-animal', animalname);
}

function pegarAnimal() {
    let animal = document.querySelector('.imagem').getAttribute('data-animal');
    window.alert("O animal é: "+animal)
}