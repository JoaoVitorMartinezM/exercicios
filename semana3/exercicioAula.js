let lista = document.createElement("ul");
let tagDiv = document.querySelector("div.filme");



let arrFilmes = ["Convite Maldito", "O Telefone Preto", "Pânico", "Não! Não Olhe!"];




tagDiv.appendChild(lista);

lista.id = "listaFilmes";

let gambiarra = document.querySelector("ul#listaFilmes");



for(let i=0; i<arrFilmes.length; i++){
    let item= document.createElement("li");
    item.innerText = arrFilmes[i];
    gambiarra.appendChild(item);
}