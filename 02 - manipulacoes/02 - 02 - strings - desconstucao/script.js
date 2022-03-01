/*
let nome = 'Ricardo';
let idade = 90;
// ..........................TEMPLATE STRINGS
// let frase = 'Meu nome é '+nome+' e eu tenho '+idade+' anos';
let frase = `Meu nome é ${nome}, eu tenho ${idade} anos e ano que vem eu farei ${idade + 1} anos`;

// console.log(frase);
*/
// ......................DESCONSTRUÇÃO DE OBJETOS
let pessoa = {
    nome: 'Ricardo',
    sobrenome: 'Emanuel',
    // idade: 33,
    social: {
        facebook: 'ricardoseminsta',
        instagram: {
            url: '@ricardoseminsta',
            seguidores: 800
        },
        twitter:'ricardoseminsta'
    },
    nomeCompleto: function() {
        return `${this.nome} ${this.sobrenome}`;
    }
};

function getFullName({nome, sobrenome}) {
    return `${nome} ${sobrenome}`;
};
/*
let nome = pessoa.nome;
let sobrenome = pessoa.sobrenome;
let idade = pessoa.idade;
*/

//é o mesmo que:

//let { nome:pessoaNome, sobrenome, idade=33 } = pessoa;

// let { facebook, instagram } = pessoa.social;

// let { nome, idade=33, social:{instagram:{url:instagram}, facebook} } = pessoa;

// console.log(pessoaNome, sobrenome, idade);
// console.log(facebook, instagram);
// console.log(nome, idade, facebook, instagram);

// console.log(getFullName(pessoa));


//.................... DESCONSTRUÇÃO DE ARRAYS

let info = ['Ricardo Emanuel', 'Ricardo', 'Emanuel', '@ricardoseminsta'];

let [nomeCompleto, nome, sobrenome, instagram] = info;

console.log(nomeCompleto, nome, sobrenome, instagram);
