class Casa {
  constructor (cor, numQuaarto, temGaragem) {
    this.cor = cor;
    this.numQuaarto = numQuaarto;
    this.temGaragem = temGaragem;
  }

// Método para descrever a casa
  descrever() {
    let descricao = `Esta casa é de cor ${this.cor}, tem ${this.numQuaarto} quarto(s)...`;
    if (this.temGaragem) {
      descricao += `e tem uma garagem.`;
    } else {
      descricao += ` e não tem garagem.`;
    }
    return descricao;
  }
}
const minhaCasa = new Casa("verde", 3, true);
const suaCasa = new Casa("azul", 2, false);
console.log(minhaCasa.descrever());
console.log(suaCasa.descrever());