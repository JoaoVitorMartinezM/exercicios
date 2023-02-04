var contador = 0;
var nome = window.prompt(`Digite o nome do aluno:`);
var arr = [];
var soma = 0;
var media = 0;

while(contador<4){
    contador++;
    var nota = parseInt(window.prompt(`Digite a nota${contador} do aluno ${nome}:`));
    arr.push(nota);
    
}

media = calcularMedia(arr);

(media>=7) ? document.write(`<h1>O aluno ${nome} foi aprovado com a média ${media}</h1>`) : document.write(`<h1>O aluno ${nome} foi reprovado com a média ${media}</h1>`);

function calcularMedia(arr){

    var soma = 0;
    var media = 0;

    for(elemento of arr) { 
        soma= soma+elemento
    }
    
    media = soma/arr.length;

    return media;

}
