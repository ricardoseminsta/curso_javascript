let nome = 'Ricardo Emanuel Silva';

let resultado = nome.split(' ');

// console.log(resultado[0]);
// console.log(resultado.length);

let n = '10';

// let res = parseInt(n) + 10;

// console.log(res);

// ................... Manipulação de array

// let lista = ['ovo', 'farinha', 'corante', 'massa'];

// let res = lista.toString();
// let res = lista.join("-");
// let res = lista.indexOf('corante');
// lista.pop();
// lista.shift();
// lista.push('prato')
// lista[0] = 'ovos';
// lista.splice(1, 1);
// let res = lista.concat(lista2)
// lista.sort();
// lista.reverse();


// ................... Manipulação de array (avançad0)

let lista = [45, 4, 9, 16, 25];
let lista2 = [];
/* */
/*
lista2 = lista.map(function(item) {
    return item *2;
}); */

/* 
lista2 = lista.filter(function(item) {
    if(item<20) {
        return true;
    } else {
        return false;
    }
});*/
//some algum maior que 20
//every todos maior que 20
lista2 = lista.some(function(item){ 
    return (item>20)? true : false;
});

let res = lista2


console.log(res);