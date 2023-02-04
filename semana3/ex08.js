
const mensagem = document.getElementById("mensagem");
const divisao = document.getElementById("divisao");

function adicionar() {
    mensagem.value==="" ? window.alert("Digite uma mensagem para exibir na página") : divisao.innerHTML = `<h1>${mensagem.value}</h1>`;

}

function salvar() {
    mensagem.value==="" ? window.alert("Digite uma mensagem para salvar na memória") : localStorage.setItem("mensagem", mensagem.value);
    
}

function mostrar() {
    const mensagem = localStorage.getItem("mensagem");
    mensagem==null ? window.alert("Sem mensagem na memória") : divisao.innerHTML = `<h1>${mensagem}</h1>`;

}