const input = document.getElementById("input");
const tagP = document.getElementById("tagP");
let capsAtivo = false;


function verificaSeCapsAtivo(e) {
    console.log(e);
    

    if(e.keyCode == 20) {
        
        
        if(capsAtivo==true){
            capsAtivo = false;
            tagP.innerText = "";
        }else{
            capsAtivo=true;
            tagP.innerText="CAPS ATIVO";
        };


    }
    

}