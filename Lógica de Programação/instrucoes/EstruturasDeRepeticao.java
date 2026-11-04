package instrucoes;

public class EstruturasDeRepeticao {
  public static void main(String[] args) {
      System.out.println("Estrutura for: ");
      for (int i = 1; i <= 5; i++) {
        System.err.println("i = "+ i);
      }

      System.out.println("\nEstrutura while:");
      int j = 1;
      while (j <= 5) {
        System.out.println("j = "+ j);
        j++;
      }

      System.out.println("\nEstrutura do-while:");
      int k = 1;
      do { 
          System.out.println("k = "+ k);
          k++;
      } while (k <= 5);
     
      }
  }

