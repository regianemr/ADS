
class Imovel {
  constructor(endereco, tamanho) {
    this.endereco = endereco;
    this.tamanho = tamanho;
  }
    descrever() {
      throw new Error("Este método deve ser implementado por subclasse.");
    }

    // método para validadção de dados (encapsulamento de excecões)
    validar() {
      if (!this.endereco || !this.tamanho) {
        throw new Error("Dados inválidos para o imóvel");
      }
    }
  }



class Casa extends Imovel {
  constructor(endereco, tamanho, cor, numQuartos, temGaragem) {
    super(endereco, tamanho);
    this.cor = cor;
    this.numQuartos = numQuartos;
    this.temGaragem = temGaragem;
  }

  // descrever() {
  //   let descricao = `Casa localizada em ${this.endereco},
  //   de cor ${this.cor}, com ${this.numQuartos} quartos, tamanho ${this.tamanho}m²,`;
    
  //   // operador ternário (simplifica a operação tipo if/ else usando ? e :)
  //   descricao += this.temGaragem ? " e possui garagem." : " e não possui garagem.";

  //   return descricao;
  // }

  // Implementação do método descrever
  descrever() {
    try {
      this.validar();
      let descricao = `Casa localizada em ${this.endereco},
      de cor ${this.cor}, com ${this.numQuartos} quartos, tamanho ${this.tamanho}m²,`;
    
      descricao += this.temGaragem ? " e possui garagem." : " e não possui garagem.";
      return descricao;

    } catch (error) {
      throw new Error(`Erro ao descrever a casa: ${error.message}`);
    }
  }

}

class Apartamento extends Imovel {
  constructor (endereco, tamanho, numeroAndar, possuiElevador) {
    super(endereco, tamanho);
    this.numeroAndar = numeroAndar;
    this.possuiElevador = possuiElevador;
  }
  descrever() {
    try {
      this.validar();
      let descricao = `Apartamento localizado em ${this.endereco},
      no ${this.numeroAndar} andar e tamanho ${this.tamanho} m²,`;
    
      descricao += this.possuiElevador ? " e possui elevador." : " e não possui elevador.";
      return descricao;

    } catch (error) {
      throw new Error(`Erro ao descrever o apartamento: ${error.message}`);
    }
    
    return descricao;
  }
  
}

// função para descrever o imóvel(polimorfismo)
function descreverImovel(imovel) {
  // console.log(imovel.descrever());
  try {
    console.log(imovel.descrever())
  } catch (error) {
    console.log(error.message)
  }
}

// Criação de objetos
const minhaCasa = new Casa("Rua A", 120, "azul", 3, true);
const meuApartamento = new Apartamento("Rua B", 85, 11, true);

descreverImovel(minhaCasa);
descreverImovel(meuApartamento);

const casaInvalida = new Casa ("", 0, "verde", 2, false);
descreverImovel(casaInvalida);