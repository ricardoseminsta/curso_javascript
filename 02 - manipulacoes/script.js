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

/* 
//some algum maior que 20
//every todos maior que 20
lista2 = lista.some(function(item){ 
    return (item>20)? true : false;
});*/


// findIndex retorna a posição

/* 
lista2 = lista.find(function(item) {
   return (item == 16) ? true : false;
});*/
// let res = lista2
// console.log(res);

// ................ DATAS ...............


// let d = new Date();
// let d = new Date('2020-01-01 15:42:17');

/* 
let d = new Date();

let res = Date.now();

console.log(res);

let m = new Date('2021-10-23');

m.setDate(m.getDate() + 100);

let aumentarData = m;

console.log(aumentarData);
*/

// ............... MATEMATICA..........

/*
let novoValor = Math.floor((Math.random() * 100)/2 );

let res = novoValor;
console.log(res);
*/

// ....................... intervalos-Timers
let timer;

function comecar() {
    timer = setInterval(showTime, 1000);
}

function parar() {
    clearInterval(timer);
}

function addZero(i) {
    if (i < 10) {i = "0" + i}
    return i;
  }

function showTime() {
    let d = new Date();
    let h = addZero(d.getHours());
    let m = addZero(d.getMinutes());
    let s = addZero(d.getSeconds());
    let txt = h+':'+m+':'+s;

    document.querySelector('.demo').innerHTML = txt;
}