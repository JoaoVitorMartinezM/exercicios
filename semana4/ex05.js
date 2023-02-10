class Aluno{
    #nome;
    #cpf;
    #codTurma;
    constructor(nome, cpf, codTurma){
        this.#nome = nome;
        this.#cpf = cpf;
        this.#codTurma = codTurma;

    }

    get nome(){
        return this.#nome;
    }

    get cpf(){
        return this.#cpf;
    }

    get codTurma(){
        return this.#codTurma;
    }

    imprimeDados(){
        console.log(`${this.#nome} ${this.#cpf} ${this.#codTurma}`);
    }
}