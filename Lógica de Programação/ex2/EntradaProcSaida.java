package ex2;

import java.util.Scanner;

public class EntradaProcSaida {
  
  public static void main(String[] args) {
      float num1 = 0;
      float num2 = 0;
      float num3 = 0;
        float resultadoSoma;
        float resultadoMedia;

        Scanner ler = new Scanner(System.in);
        System.out.printf("Informe o primeiro número: \n");
        num1 = ler.nextInt();
        System.out.printf("Informe o segundo número: \n");
        num2 = ler.nextInt();
        System.out.printf("Informe o terceiro número: \n");
        num3 = ler.nextInt();

        resultadoSoma = num1 + num2 + num3;
        resultadoMedia = resultadoSoma/3;

        System.out.println("Os numeros são: ");
        System.out.println(num1);
        System.out.println(num2);
        System.out.println(num3);
        System.out.println("A soma é: ");
        System.out.println(resultadoSoma);
        System.out.println("A média é: ");
        System.out.println(resultadoMedia);
  }
}
