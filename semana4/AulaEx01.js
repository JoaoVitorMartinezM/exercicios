

class Div {
    #div;
    constructor(texto){
        this.#div = document.createElement('div');
        this.#div.innerHTML += `<h1>${texto}</h1>`;
        


    }

    get div(){
        return this.#div;
    }
}

class DivBackgroundColor extends Div {
    #backgroundColor;
    constructor(texto, hexadecimalColor){
        super(texto);
        this.#backgroundColor = hexadecimalColor;
        this.adicionaEstilo();
    }

    adicionaEstilo(){
        this.div.style.backgroundColor = this.#backgroundColor;
        this.div.classList.add('estilo');
    }
}

class DivBackgroundColorAndHover extends DivBackgroundColor{
    constructor(texto, hexadecimalColor){
        super(texto, hexadecimalColor);
        
        this.adicionaComportamento();

    }

    adicionaComportamento(){
        this.div.classList.add('comportamento');
    }
}


const body = document.getElementsByTagName("body");

let divObject = new Div("Hello world!!!");

body[0].appendChild(divObject.div);

let divComBackground = new DivBackgroundColor("Hello world!!!", "#A2A2A2");

body[0].appendChild(divComBackground.div);

let divComportamento = new DivBackgroundColorAndHover("Hello world!!!", "#A228F2");

body[0].appendChild(divComportamento.div);



