package org.example.d5.recapDemo1;

public class RecapDemo1 {
    public static void main(String[] args) {
        int sayi1 = 20;
        int sayi2 = 25;
        int sayi3 = 26;

        int buyukSayi = sayi1;

        if (buyukSayi < sayi2){
            buyukSayi = sayi2;
        }
        if (buyukSayi < sayi3) {
            buyukSayi = sayi3;
        }
        System.out.println("En büyük sayı : " + buyukSayi);
    }
}
