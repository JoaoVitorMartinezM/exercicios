

const tagsInput = document.getElementsByTagName("input");

const div = document.getElementById("result");




console.log(tagsInput[0].placeholder);

function somar() {
    
    const soma = parseInt(tagsInput[0].value) + parseInt(tagsInput[1].value);

    return div.innerHTML = `<h1>${soma}</h1>`;    
}

function subtrair() {

    const subtracao = parseInt(tagsInput[0].value) - parseInt(tagsInput[1].value);

    return div.innerHTML = `<h1>${subtracao}</h1>`;
}