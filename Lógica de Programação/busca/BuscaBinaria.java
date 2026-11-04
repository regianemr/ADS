package busca;

public class BuscaBinaria {
  public static int buscaBinaria(int[] arr, int valor) {
      System.out.println("\nComeçando a busca Binária...");
      int esquerda = 0;
      int direita = arr.length - 1;

      System.out.println("Esquerda = " + esquerda + "\n Direita = " + direita);

      while (esquerda <= direita) {
        System.out.println("\nFazendo a busca Enquanto..." + "\nEsquerda = " + esquerda + "\n Direita = " + direita);
        int meio = (esquerda + direita) / 2;
        System.out.println("Meio = " + meio);

        if (arr[meio] == valor) {
          return meio;
        }

        if (arr[meio] > valor) {
          direita = meio - 1;
        }

        else {
          esquerda = meio + 1;
        }
      }
      return  -1;
  }

  public static void main(String[] args) {
      int[] numeros = {10, 20, 30, 40, 50, 60, 70, 80, 90, 100};
      int valorBuscado = 40;

      System.out.println("Tamanho do array = " + numeros.length);

      int resultado = buscaBinaria(numeros, valorBuscado);
      if (resultado != -1) {
        System.out.println("Valor "+ valorBuscado + " encontrado no índice "+ resultado);
      } else {
        System.out.println("Valor "+ valorBuscado + " não encontrado.");

      }
  }
}
