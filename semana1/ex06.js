
var peso = parseFloat(window.prompt("Informe seu peso:"));
var altura = parseFloat(window.prompt("Informe sua altura:"));
var imc = peso/(altura*altura);

console.log(imc);

if(imc>=25){
    window.alert("Você está acima do peso, procure um médico");

}else if(imc>=18.5 && imc<=24.9){
    window.alert("PARABÉNS!! Você está no peso ideal");

}else{
    window.alert("Você está abaixo do peso, procure um médico");

}