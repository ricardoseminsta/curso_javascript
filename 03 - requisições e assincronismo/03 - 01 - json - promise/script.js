// ...................CALLBACK
/*
function alertar() {
    alert('Opa, tudo bem?')
}

setTimeout(alertar, 2000); */

// .........................PROMISES

function pegarTemperatura() {
    return new Promise(function(resolve, reject) {
        console.log("pegando temperatura...");

        setTimeout(function(){
            resolve("40 na sombra");
        },2000);
    });
};


// USANDO A PROMISSE

/*
console.log('codigo antes');
let temp = pegarTemperatura();
console.log('codigo durante');
temp.then(function(resultado){
    console.log(`TEMPERATURA: ${resultado}`);
});

temp.catch(function(error){
    console.log('eita deu erro!!');
});

console.log('cogido depois'); */

function loadPosts() {
    document.getElementById('posts').innerHTML = 'Carregando...'
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(function(resultado) {
           return resultado.json();
        })
        .then(function(json){
            montarBlog(json);

            //document.getElementById('posts').innerHTML = json.length+ " posts";
        })
        .catch(function(error) {
            console.log('Deu problema! '+error);
        });
}

function montarBlog(lista) {
    let html = '';

    for(let i in lista){
        html += '<h3>'+ lista[i].title +'</h3>';
        html += lista[i].body+'<br/>';
        html += '<hr/>'
    }

    document.getElementById('posts').innerHTML = html;
}