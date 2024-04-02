package org.example.d19.methods2;

public class Methods2 {
    public static void main(String[] args) {
        String mesaj = "Bugün hava ço´k güzel.";
        String yeniMesaj = sehirVer();
        System.out.println(yeniMesaj);
        int sayi = topla(5,7);
        System.out.println(sayi);
        int toplam = topla2(2,3,4,5,6,7,8,9);
        System.out.println(toplam);
    }

    public static void ekle() {
        System.out.println("eklendi");
    }

    public static void sil() {
        System.out.println("silindi");

    }

    public static void guncelle() {
        System.out.println("güncellendi");

    }

    public static int topla(int a, int b) {
        return a + b;
    }

    public static int topla2(int... sayilar){
        int total = 0;
        for(int sayi: sayilar){
            total += sayi;
        }
        return total;
    }

    public static String sehirVer() {
        return "ankara";
    }
}
