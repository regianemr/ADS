let pessoa = {
  "nome": "João",
  "idade": 30,
  "endereço": {
    "rua": "Rua 1",
    "numero": 123
  },
  "telefone": ["1234-5678", "8765-4352"]
};
// Acessar Dados

console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa.endereço.numero);
console.log(pessoa["idade"]);
console.log(pessoa["telefone"][1]);

// Adicionar Dados
console.log("\nAdcionar Dados:")
console.log(pessoa.nome);
pessoa.email = "joao@exemplo.com";
console.log(pessoa);

// Modificar dados
console.log("\nModificar Dados:")
pessoa.idade = 31;
pessoa.endereço.rua = "Rua 2";
console.log(pessoa);

// Remover Dados
console.log("\nRemover Dados:")
delete pessoa.telefone;
console.log(pessoa);

// Arrays
pessoa.hobbies = ["leitura", "esportes"];
console.log(pessoa.hobbies[1]);
pessoa.hobbies.push("viagens");
console.log(pessoa.hobbies);

// Iteração
for (let chave in pessoa) {
  console.log(chave + ": " + pessoa[chave]);
}

// Converter para JSON
let jsonTexto = JSON.stringify(pessoa);
console.log(jsonTexto);

let objetoPessoa = JSON.parse(jsonTexto);
console.log(objetoPessoa);