package org.example._003loops;

public class Loops {
    public static void main(String[] args) {
        String urun = "Laptop";
        for (int i = 1; i <= 100; i++) {
            System.out.println(urun);
        }

        for (int i = 1; i <= 10; i++) {
            System.out.println(i);
        }

        int sayi = 10;
        while (sayi <= 100) {
            System.out.println(sayi);
            sayi++;
        }

        int sayi2 = 10;
        do {
            System.out.println(sayi2);
        } while (sayi2 > 100);
    }
}
