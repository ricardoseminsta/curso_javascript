// ..................OBJECT KEYS() VALUES()
let lista = ['ovo', 'macarrão', 'farinha', 'batata', 'cuzcuz'];
// console.log(Object.entries(lista));

let pessoa = {
    nome: 'Ricardo',
    sobrenome: 'Emanuel',
    idade: 90,
};

// console.log(Object.entries(pessoa));

//.....................STRINGPAD END E START

let telefone = '5';

// console.log(telefone.padEnd(9, '*'));
// console.log(telefone.padStart(9, '0'));

let cartao = '1234123412341234'
console.log(`Este é o seu cartão? ${cartao}`);

let lastDigits = cartao.slice(-4);

cataoMascarado = lastDigits.padStart(16, "*");

console.log(`Este é o seu cartão? ${cataoMascarado}`);
