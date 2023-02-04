
var pedido = [];
var repete = true;
var elemento;

var maiorOcorrencia = 0;





function perguntaAoUsuario() {
    return window.prompt(`Selecione o número referente ao produto desejado ou feche o seu pedido:`);
};



while(repete){
    switch(perguntaAoUsuario()){
        case "1":
            var qtd =parseInt(window.prompt(`Quantidade que deseja do item selecionado:`));
            for(qtd;qtd>0;qtd--){
                pedido.push("Hortifruti");
            }

            break;
        case "2":
            var qtd =parseInt(window.prompt(`Quantidade que deseja do item selecionado:`));
            for(qtd;qtd>0;qtd--){
                pedido.push("Laticínios");
            }
            break;
        case "3":
            var qtd =parseInt(window.prompt(`Quantidade que deseja do item selecionado:`));
            for(qtd;qtd>0;qtd--){
                pedido.push("Carnes");
            }
            break;
        case "4":
            var qtd =parseInt(window.prompt(`Quantidade que deseja do item selecionado:`));
            for(qtd;qtd>0;qtd--){
                pedido.push("Peixes");
            }
            break;
        case "5":
            var qtd =parseInt(window.prompt(`Quantidade que deseja do item selecionado:`));
            for(qtd;qtd>0;qtd--){
                pedido.push("Aves");
            }
            break;
        case "6":
            repete = false;

            
            const maiorOcorrenciaPorElemento = function(valor){return pedido.reduce((acc, item) => valor === item ? acc+1 : acc, 0)} ;

            for(i=0;i<pedido.length;i++){
                var x = maiorOcorrenciaPorElemento(pedido[i]);

                if(x>maiorOcorrencia){
                    maiorOcorrencia=x
                    elemento = pedido[i];
                } 
                
                
            }


            console.log(`${elemento} com ${maiorOcorrencia} repetições`);

        
            
            break;    
        default:
            break; 
    }
}