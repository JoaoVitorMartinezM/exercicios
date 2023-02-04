var i =0;

var avaliacoes = [];

while(i<3){
    var avaliacao = window.prompt("Qual a sua opnião sobre a séria Stranger Things? [bom, exelente ou ruim]");

    (avaliacao==="ruim") ? avaliacoes.push(avaliacao) : console.log();
    
    i++;
}

console.log(`${avaliacoes.length} pessoa(s) classificaram Stranger Things como ruim`);