package pratica;

public class Exercicio {
  static void exibirMensagem(String nome) {
    System.out.println("Olá "+ nome + "! Seja bem-vindo ao sistema!");
  }
  static int calcularQuadrado (int numero) {
      return numero * numero;
  }
  public static void main(String[] args) {
    exibirMensagem("Regiane");

    int numero = 5;
    int resultado = calcularQuadrado(numero);
    System.out.println("O quadrado do número " + numero + " é: " + resultado);
  }
}
