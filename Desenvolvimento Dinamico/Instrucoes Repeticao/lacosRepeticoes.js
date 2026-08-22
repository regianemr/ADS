// Entregador de pizza nas ruas de 1 a 10

for (let rua = 1; rua <= 10; rua++) {
  console.log("Entrega feita na rua: ", rua);
}

// Exercicios fisico
// decide fazer flexão até ficar cansado

let quantidadeFlexoes = 0;
let cansaco = false;

while (!cansaco) {
  quantidadeFlexoes++;
  console.log("Eu fiz ", quantidadeFlexoes, "flexões!");

  if (quantidadeFlexoes === 10) {
    cansaco = true;
  }
}

// Do while
// aprendendo a andar de bicicleta, praticar até andar por pelo menos 1 min

let tempoDeAndar = 0;
let caiu = false;

do {
  tempoDeAndar++;
  console.log("Andei de bike por ", tempoDeAndar, "minutos...");

  if (tempoDeAndar == 3) {
    caiu = true;
  }
} while (!caiu && tempoDeAndar < 10) {

}