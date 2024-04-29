package org.example._006workshop;

public class WorkShop {
    public static void main(String[] args) {
        int[] sayiler = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
        int arananSayi = 9;
        boolean result = sayiBul(sayiler, arananSayi);
        mesajVer(result, arananSayi);
    }

    public static boolean sayiBul(int[] dizi, int arananSayi) {
        boolean result = false;
        for (int sayi : dizi) {
            if (sayi == arananSayi) {
                result = true;
                break;
            }
        }
        return result;
    }

    public static void mesajVer(boolean result, int arananSayi) {
        System.out.println((result ? "Sayı mevcuttur: " : "Sayı mevcut değildir: ") + arananSayi);
    }
}
