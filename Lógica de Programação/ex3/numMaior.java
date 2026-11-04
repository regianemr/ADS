package ex3;

import java.util.Scanner;

public class numMaior {
  public static void main(String[] args) {
      int num1, num2;

      Scanner ler = new Scanner(System.in);
      System.out.println("Escreva um número: \n ");
      num1 = ler.nextInt();
      System.out.println("Escreva outro número: \n ");
      num2 = ler.nextInt();

      if(num1 > num2) {
        System.out.println("O primeiro número é maior.");
      } else {
        System.out.println("O segundo número é maior.");
      }


  }
}
