package org.example.d15.mukemmelsayi;

public class MukemmelSayi {
    public static void main(String[] args) {
       int number  = 6;
       int total = 0;
       for(int i = 1; i < number; i++){
           if (number % i == 0){
               total += i;
           }

       }
        System.out.println(number + (total == number ? " Mükemmel sayıdır" : " Mükemmel sayı değildir"));
    }
}
