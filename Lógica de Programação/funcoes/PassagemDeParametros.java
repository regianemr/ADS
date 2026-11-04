package funcoes;

public class PassagemDeParametros {
  public static void modificarValor(int numero) {
    numero = numero * 2;
    System.out.println("Dentro do método (Valor primitivo):" + numero);

  }
  public static void modificarObjeto(Pessoa pessoa) {
    pessoa.nome = "João";
  }
  
  public static void reatribuirObjeto(Pessoa pessoa) {
      pessoa = new Pessoa();
      pessoa.nome = "Maria";
    }
    
    public static void main(String[] args) {
      int numero = 10;
      System.out.println("Antes do método: " + numero);
      modificarValor((numero));
      System.out.println("Após o método: " + numero);
      System.out.println("\n================");

      Pessoa pessoa = new Pessoa();
      pessoa.nome = "Carlos";
      System.out.println("\nAntes do método: " + pessoa.nome);
      modificarObjeto(pessoa);
      System.out.println("\nDepois do método: " + pessoa.nome);

      reatribuirObjeto(pessoa);
      System.out.println("Após tentar reatribuir objeto: " + pessoa.nome);

      
  }
}

class Pessoa {
  String nome;
}
