package matrizes;

public class ManipulacaooDeMatrizes {
  public static void main(String[] args) {
      int [][] matriz = {
        {1, 2, 3},
        {4, 5, 6}
      };

      System.out.println("Mostrar Matriz");
      for (int i = 0; i < matriz.length; i++) {
        for (int j = 0; j < matriz[i].length; j++) {
          System.err.println(matriz[i][j] + " ");
        }
        System.out.println();
      }

      System.out.println("\n Valor da primeira linha e segunda coluna = "+ matriz[0][1]);

      matriz[1][2] = 10; //Modifica o valor da segunda linha e terceira coluna para 10
      System.out.println("\nNovo valor = " +matriz[1][2]);

      System.out.println("\nMostrar Matriz atualizada");
      for (int i = 0; i < matriz.length; i++) {
        for (int j = 0; j < matriz[i].length; j++) {
          System.err.println(matriz[i][j] + " ");
        }
        System.out.println();
      }}

}