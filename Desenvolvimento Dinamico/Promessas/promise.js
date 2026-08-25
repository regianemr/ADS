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

// função que simula uma operação assincrona de inspeção de casa
function inspecionarCasa(casa) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Inspeção localizada em ${casa.endereco} concluída.`)
    }, 1000);
  })
}

// função que simula uma operação assincrona de reparo de casa
function repararCasa(casa) {
  console.log('casa', casa);
  return new Promise((resolve) => 
    setTimeout(() => 
      resolve(`Reparo localizada em ${casa.endereco} concluída.`), 3000))
}

// Classe Casa
class Casa {
  constructor({endereco, tamanho, cor, numQuartos, temGaragem}) {
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
    verificarStatusDaCasa(this)
    .then((resultado) => {
      console.log('resultado', resultado); // Saída: A casa está em boas condições!
      return inspecionarCasa(this);
    })
    .then((resultadoInspecao) => {
      console.log('resultadoInspecao', resultadoInspecao); // Saída: Inspeção concluída.
    })
    .catch((erro) => {
      console.error('erro 64', erro); //Saída: A casa precisa de reparos.
      return repararCasa(this);
    })
    .then((resultadoReparo) => {
      console.log('resultadoReparo', resultadoReparo); // Saída: Reparos foram concluídos.
      return inspecionarCasa(this);
    })
    .then((resultadoFinalInspeção) => {
      if(resultadoFinalInspeção) {
        console.log('resultadoFinalInspeção', resultadoFinalInspeção); // Saída: Inspeção concluída após reparos.
      }
    })
    .catch((erro) => {
      console.error(`Erro final: ${erro}`);
    });
  }
  
};

// const minhaCasa = new Casa("Rua A, 123", 153, "azul", 3, true);
const minhaCasa = new Casa({
  cor: "azul", 
  endereco: "Rua A, 123",
  numQuartos: 3, 
  tamanho: 153, 
  temGaragem: true
});
console.log('descrever', minhaCasa.descrever())

// Verificar status da casa
minhaCasa.verificarStatus();

// // Caso de falha
// const casaInvalida = new Casa("", 0, "verde", 2, false);
// console.log(casaInvalida.descrever());
// casaInvalida.verificarStatus();