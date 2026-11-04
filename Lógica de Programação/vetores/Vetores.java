package vetores;

public class Vetores {
  public static void main(String[] args) {
      int [] numbers = {1, 2, 3, 4, 5};
  String[] names = {"Alice", "Bob"};

  int[] numeros = new int[5];
  numeros[0] = 10;
  numeros[2] = 20;
  numeros[3] = 30;

  String[] nomes = new String[2];

  System.out.println("Vetor de números: "+ numbers);
  System.out.println("Vetor de números: "+ numeros);

  System.out.println("Vetor de vetor usando For");
  for (int i = 0; i< numbers.length; i++) {
    System.out.println ("Elementos na posição [" + i + "]:"  + numbers[i]);
  }
  for (int i = 0; i< numeros.length; i++) {
    System.out.println ("Elementos na posição [" + i + "]:"  + numeros[i]);
  }
  }
}
  

