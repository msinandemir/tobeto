package org.example.d12.miniprojeasalsayi;

public class MiniProjeAsalSayi {
    public static void main(String[] args) {
        int number = 1;
        if(number == 1){
            System.out.println("1 Asal Değil");
            return;
        }
        if(number < 1){
            System.out.println("Geçersiz sayı girdiniz!");
            return;
        }
        boolean isPrime = true;
        for (int i = 2; i < number; i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }
        System.out.println(number + (isPrime ? " Asal" : " Asal Değil"));
    }
}
