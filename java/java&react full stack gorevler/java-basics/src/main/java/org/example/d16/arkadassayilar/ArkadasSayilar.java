package org.example.d16.arkadassayilar;

public class ArkadasSayilar {
    public static void main(String[] args) {
        int number1 = 220;
        int number2 = 284;
        int total1 = 0;
        int total2 = 0;

        for (int i = 1; i < number1; i++) {
            if (number1 % i == 0)
                total1 += i;
        }

        for (int i = 1; i < number2; i++) {
            if (number2 % i == 0)
                total2 += i;
        }

        System.out.println(number1 + " ve " + number2 + ((total1 == number2 && total2 == number1 )? " arkadaş sayılardır" : " arkadaş sayı değillerdir"));

    }
}
