export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    //private negociacoes: Negociacao[]=[];
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    // lista(): ReadonLy Negociacao[] { 
    //  return this.negociacoes;
    //    }
    lista() {
        return this.negociacoes;
    }
}
