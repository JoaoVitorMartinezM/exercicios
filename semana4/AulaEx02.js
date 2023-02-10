

// array de numeros
const arr = [10,5,60,3,55,70,21,30];

//Maneiras de usar o forEach
arr.forEach(n => console.log(n));

arr.forEach( (n) => console.log(n));

arr.forEach( (n)=>{
    console.log(n)

} );

//Como usar o Filter
let novoArr = arr.filter( (n) => {
    if (n >= 21){
        return n;
    } 
});


novoArr.forEach(n => console.log(n));

// array de objetos
const arrObjetos = [
    {nome: "joao", idade: 6 },
    {nome: "Luís", idade: 45 },
     {nome: "Karina", idade: 43 },
     {nome: "Pedro", idade: 12 }
];

// utilizando filter na lista de objetos
let arrMaiorDeDezoito = arrObjetos.filter((obj) => {
    if(obj.idade >= 18){
        return obj;
    }

});

// Usando find, some e every, todos esperam uma condição booleana
let elemento = arr.find((x) => 10===x);
let algumImpar = arr.some((x) => x%2 === 1);
let todosNumero = arr.every((x) => typeof x === typeof 1);
console.log(elemento);
console.log(algumImpar);
console.log(todosNumero);


// Map para modificar valores de um array
const arrApenasNomes = arrObjetos.map((obj) => {
    return obj.nome;
});

console.log(arrApenasNomes);

const arrSaudacoes = arrObjetos.map((obj) => {
    return `Meu nome é ${obj.nome} e tenho ${obj.idade} anos.`;
});

console.log(arrSaudacoes);

// Usando reduce para somar os valores de um array

const soma = arr.reduce((total, valor)=>{
    return total + valor;
}, 0);

console.log(soma);

const arrNotas = [7,7,7];

const media = arrNotas.reduce((controle, nota)=>{


    return (arrNotas[controle] + nota)/2;
    
}, 0);


console.log(media);