package org.example.d7.loopdemo;

public class LoopDemo {
    public static void main(String[] args) {
        //for döngüsü
        for (int i = 0; i < 10; i+=2) {
            System.out.println(i);
        }

        System.out.println("For döngüsü bitti");

        //while döngüsü
        int i = 0;
        while (i < 10){
            System.out.println(i);
            i++;
        }

        System.out.println("While döngüsü Bitti");

        //do-while
        int j = 1;
        do {
            System.out.println(j);
            j+=2;
        }while (j < 10);

        System.out.println("Do-While döngüsü Bitti");

    }




}
