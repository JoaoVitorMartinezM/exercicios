



const tabela = document.querySelector("table#tabela");
const storage = localStorage;


storage.setItem(0,  JSON.stringify({
    nome: "Pure/Honey",
    cantor:"Beyoncé"
}));
storage.setItem(1,   JSON.stringify({
    nome: "Rock you like a hurricane",
    cantor:"Scorpions"
}));
storage.setItem(2,  JSON.stringify({
    nome: "Sugar honey ice and tea",
    cantor:"Bring me the horizon"
}));
storage.setItem(3,  JSON.stringify({
    nome: "Bones",
    cantor:"Imagine Dragons"
}));
storage.setItem(4,  JSON.stringify({
    nome: "Bloody Mary",
    cantor:"Lady Gaga"
}));
storage.setItem(5,   JSON.stringify({
    nome: "Bloody Mary",
    cantor:"Lady Gaga"
}));




for(let i=0; i<storage.length; i++){
    let item  = JSON.parse( localStorage.getItem(i));

    console.log(item);
      
   
    tabela.innerHTML += `<tr><td>${item.nome}</td><td>${item.cantor}</td></tr>`;
    
    
}

