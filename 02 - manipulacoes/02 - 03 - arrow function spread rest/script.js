// ..............................ARROW FUNCTIONS

/*let somar = (x, y) => {
    return x + y;
}

let letrasNoNome = nome => nome.length;

console.log(somar(10,5));

console.log(letrasNoNome('Ricardo'));*/


// ................................OPERADOR SPREAD

/* spread com array 

let numeros = [1, 2, 3 ,4]
let outros = [...numeros, 5, 6, 7, 8]

console.log(outros);
*/

/* spread com objetos 

let info = {
    nome: 'Ricardo',
    sobrenonme: 'Emanuel',
    idade: 33
};

let novaInfo = {
    ...info,
    cidade: 'Afogados',
    estado: 'Pernambuco',
    pais: 'Brasil'
}

console.log(novaInfo);

*/

// ....................... OPERADOR REST

/*
function adcionar(...numeros) {
    console.log(numeros);
}

adcionar(5, 6, 7, 8, 9);

 */

// spread e rest

function adcionar(nomes, ...novosNomes) {
    let novoConjunto = [
        ...nomes,
        ...novosNomes
    ];

    console.log(novoConjunto);
}
let nomes = ["tanga", "zorba"];

let outros = adcionar(nomes,"Ricardo", "JOana", "Romildo", "Vick", " Cleyton");