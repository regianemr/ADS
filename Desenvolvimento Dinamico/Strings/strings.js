//SLICE():
//  Extrai uma parte de uma string e retorna como uma nova string, sem modificar a string original
let frutas = "maça, banana, laranja, uva, abacaxi";
console.log("Tamanho da string:", frutas.length);

let parteFrutas = frutas.slice(5, 21);
console.log("Resultado slice:", parteFrutas);
let saudacao = "Olá, mundo!"
let saudacaoNova = saudacao.slice(5, 10);
console.log("Resultado slice:", saudacaoNova);


// TRIM() : Remove espaços em branco do início e do final da string
let frutaEspaco = "            abacate      ";
console.log("Fruta com espaço:", frutaEspaco);
let frutaSemEspaco = frutaEspaco.trim();
console.log("Resultado TRIM:", frutaSemEspaco);

// SPLIT(): Divide uma string de acordo com um separador específico e retorna uma nova string.
let listaFrutas = "maça,banana,laranja,uva,abacaxi";
let arrayFrutas = listaFrutas.split(",");
console.log("Resultado split:", arrayFrutas);

// OPERAÇÕES COM STRINGS
let animal1 = "Elefante";
let animal2 = "Girafa";
let animal3 = "Zebra";

// Substring
// Ex: Pega uma parte da string 'Elefante', começando do índice 3 até o 7;
let parteAnimal1 = animal1.substring(3, 7);
console.log(parteAnimal1);

// Replace
// Ex: substitui a substring 'ra' por 're' em Girafa
let novoAnimal2 = animal2.replace("ra", "re");
console.log(novoAnimal2);

// Concat
// Ex: Concatena as strings com espaços entre elas
let animaisJuntos = animal1.concat(" ", animal2, " ", animal3);
console.log(animaisJuntos);
