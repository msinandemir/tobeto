package org.example._004methods;

public class Methods {
    public static void main(String[] args) {
        mesajVer("Engin");
        mesajVer("Kerem");
        mesajVer("Murat");
        mesajVer("Halil");
        hesapla();
        hesapla();
        System.out.println(topla(3, 5));
        System.out.println(topla(4, 6));
        System.out.println(topla(5, 7));
        System.out.println(toplananIkiSayininYuzdeOnu(90, 10));
    }

    public static void mesajVer(String isim) {
        System.out.println("merhaba " + isim);

    }

    public static void hesapla() {
        System.out.println("hesaple.");
    }

    public static int topla(int sayi1, int sayi2) {
        return sayi1 + sayi2;
    }

    public static double toplananIkiSayininYuzdeOnu(int sayi1, int sayi2) {
        int toplam = topla(sayi1, sayi2);
        return (double) (toplam * 10) / 100;
    }

    public static double krediHesapla(double krediMiktari) {
        return 12500.0;
    }
}
