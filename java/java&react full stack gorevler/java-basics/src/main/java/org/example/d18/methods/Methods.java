package org.example.d18.methods;

public class Methods {
    public static void main(String[] args) {
        sayiBulmaca();
        sayiBulmaca();
        sayiBulmaca();
        sayiBulmaca();

    }

    public static void sayiBulmaca() {
        int[] numbers = new int[]{1, 2, 5, 7, 9, 0};
        int searchedNumber = 5;
        boolean isExist = false;
        for (int number : numbers) {
            if (searchedNumber == number) {
                isExist = true;
                break;

            }
        }
        String mesaj = "";
        mesaj = searchedNumber + " Dizinin içerisinde " + (isExist ? "var" : "yok");
        mesajVer(mesaj);
    }

    public static void mesajVer(String mesaj) {
        System.out.println(mesaj);

    }
}
