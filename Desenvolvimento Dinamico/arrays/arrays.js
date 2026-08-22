// Métodos básicos push, pop, shift

let frutas = ["maca", "banana", "laranja", "uva"];
console.log(frutas);
console.log(frutas.length);

// método push() -> Adiciona itens à lista
let novoComprimento = frutas.push("manga", "abacate");
console.log(novoComprimento);

// Pop() -> Remove o último item da lista
let ultimaFruta = frutas.pop();
console.log(frutas);
console.log(ultimaFruta);

// shift() -> remove o primeiro item da lista

let primeiraFruta = frutas.shift();
console.log(frutas);
console.log(primeiraFruta);

