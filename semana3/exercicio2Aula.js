//Captura todas os itens de ul
let tagsLi = document.querySelectorAll("ul#lista li");

//Varre o array de itens li
for (let i = 0; i < tagsLi.length; i++) {
    //Verifica se a primeira letra de cadas item é igual a 'c'
    if(tagsLi[i].textContent[0].toLowerCase() == 'c'){
        //Captura a tag pai
        let tagPai = tagsLi[i].parentElement;
        //Remove a tag filha
        tagPai.removeChild(tagsLi[i]);

        
    }
    
}