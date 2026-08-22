// Objetos que representam o sucesso ou a falha eventual de uma operação assíncrona.

function verificarStatusDaCasa(casa) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const sucesso = Math.random() > 0.5; // valor aleatório
      if (sucesso) {
        resolve(`A casa localizada em ${casa.endereco} está em boas condições.`);
      } else {
        reject(`A casa localizada em ${casa.endereco} precisa de reparos.`)
      }
    }, 2000); // 2 segundos
  }); 
}

class Casa {
  constructor(endereco, tamanho, cor, numQuartos, temGaragem) {
    this.endereco = endereco;
    this.tamanho = tamanho;
    this.cor = cor;
    this.numQuartos = numQuartos;
    this.temGaragem = temGaragem;
  }

  descrever() {
    let descricao = `Casa localizada em ${this.endereco},
    de cor ${this.cor}, com ${this.numQuartos} quartos, tamanho ${this.tamanho}m²,`;
    
    // operador ternário (simplifica a operação tipo if/ else usando ? e :)
    descricao += this.temGaragem ? " e possui garagem." : " e não possui garagem.";

    return descricao;
  }

  verificarStatus() {
    verificarStatusDaCasa(this).then((resultado) => {
      console.log(resultado);
    })
    .catch((erro) => {
      console.error(erro);
    });
  }
  
};

const minhaCasa = new Casa("Rua A", 120, "azul", 3, true);
console.log(minhaCasa.descrever())

// Verificar status da casa
minhaCasa.verificarStatus();

// Caso de falha
const casaInvalida = new Casa("", 0, "verde", 2, false);
console.log(casaInvalida.descrever());
casaInvalida.verificarStatus();