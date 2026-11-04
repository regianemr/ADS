package busca;

public class BuscaSequencial {
  public static int buscaSequencial(int[] arr, int valor) {
    for (int i = 0; i < arr.length; i++) {
      if (arr[i] == valor) {
        return i;
      }
    }
    return -1;
  }

  public static void main(String[] args) {
      int[] numeros = {10, 20, 30, 40, 50};
      int valorBuscado = 30;

      int resultado = buscaSequencial(numeros, valorBuscado);
      if (resultado != -1) {
        System.out.println("Valor "+ valorBuscado + " encontrado no índice "+ resultado);
      } else {
        System.out.println("Valor "+ valorBuscado + " não encontrado.");

      }
  }
}


