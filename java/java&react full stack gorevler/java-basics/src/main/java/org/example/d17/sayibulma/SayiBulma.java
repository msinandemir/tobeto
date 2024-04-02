package org.example.d17.sayibulma;

public class SayiBulma {
    public static void main(String[] args) {
        int[] numbers = new int[]{1, 2, 5, 7, 9, 0};
        int searchedNumber = 5;
        boolean isExist = false;
        for (int number : numbers) {
            if (searchedNumber == number) {
                isExist = true;
                break;

            }
        }
        System.out.println(searchedNumber + " Dizinin içerisinde " + (isExist ? "var": "yok"));

    }
}
