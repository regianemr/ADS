package matriz;

public class matriz {
  public static void main(String[] args) {
      int numeros[][] = new int[3][2];
      int soma = 1;

      for (int i = 0; i < 3; i++) {
        for (int  j = 0; j < 2; j++) {
          soma = soma+2;
          numeros[i][j] = soma;
        }
      }
      for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 2; j++) {
          System.out.println("Valores para a linha " + (i+1) + " e coluna " + (j+1) +": ");
          System.out.println(numeros[i][j]);
        }
      }
      System.out.println("Fim da execução");
  }
}
