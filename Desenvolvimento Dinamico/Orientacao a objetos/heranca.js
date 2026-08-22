// Classe base "Casa"

class Casa {
  constructor (cor, numQuarto, temGaragem) {
    // Propriedades PRIVADAS utilizando convenção de underscore
    this._cor = cor;
    this._numQuarto = numQuarto;
    this._temGaragem = temGaragem;
  }

// Método gatters e setters para acessar e modificar as propriedades
  get cor() {
    return this._cor;
  }

  set cor(novaCor) {
    this._cor = novaCor;
  }

  get numQuarto() {
    return this._numQuarto;
  }

  set numQuarto(novoNumQuarto) {
    return this._numQuarto= novoNumQuarto;
  }

  get temGaragem() {
    return this._temGaragem;
  }

  set temGaragem(novoTemGaragem) {
    return this._temGaragem = novoTemGaragem;
  }

  // Método para descrever a casa
  descrever() {
    let descricao = `Esta casa é de cor ${this._cor}, tem ${this._numQuarto} quarto(s)`;
    if (this._temGaragem) {
      descricao += ` e tem uma garagem.`;
    } else {
      descricao += ` e não tem garagem.`;
    }
    return descricao;
  }
}
// Classe DERIVADA que herda de "Casa"
class casaLuxuosa extends Casa {
  constructor(cor, numQuarto, temGaragem, temPiscina) {
    super(cor, numQuarto, temGaragem);
    this._temPiscina = temPiscina;
  }

  // Getter e setter 
  get temPiscina() {
    return this._temPiscina;
  }

  set temPiscina(novoTemPiscina) {
    return this._temPiscina = novoTemPiscina;
  }

  descrever() {
    let descricao = super.descrever();
    if (this.temPiscina) {
      descricao += ` E também tem piscina.`;
    } else {
      descricao += ` E não tem piscina.`;
    }
    return descricao;
  }
}

const minhaCasa = new Casa("azul", 2, true);
const minhaCasaLuxuosa = new casaLuxuosa("verde", 5, true, true);

console.log(minhaCasa.descrever());
console.log(minhaCasaLuxuosa.descrever());