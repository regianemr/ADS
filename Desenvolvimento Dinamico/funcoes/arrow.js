// Código mais simples e limpo

// let somar = (a,b) => {
//   return a+b;
// };

// console.log(somar(3, 5));

// let dobrar = n => n*2;
// console.log(dobrar(6));

// // Callback com arrow function
// let numeros = [1, 2, 3, 4, 5];

// let numerosDobrados = numeros.map(dobrar);
// console.log(numerosDobrados);

// let saudacao = (nome, idade) => {
//   let mensagem = `Olá, meu nome é ${nome} e tenho ${idade} anos.`;
//   return mensagem;
// }

// console.log(saudacao("Regiane", 31));

// Ex01
function saudacao() {
    let mensagem = "Olá mundo!";
    return (mensagem);
  }

console.log(saudacao());

function novaSaudacao(nome) {

  let mensagem = `Bem vindo ao curso, ${nome}!!!`;
  return (mensagem);

}

console.log(novaSaudacao("Regiane"));
console.log(novaSaudacao("Luiz"));
console.log(novaSaudacao("Maria"));
console.log(novaSaudacao("João"));

function soma(a,b) {
  return (a + b);
}

console.log(soma(5, 6));
console.log(soma(3, 2));
console.log(soma(8, 1));
console.log(soma(5, 9));
