package org.example.d13.sesliharfler;

public class SesliHarfler {
    public static void main(String[] args) {

        char harf = 'A';

        switch (harf){
            case 'A':
            case 'U':
            case 'I':
            case 'O':
                System.out.println("ince sesli harf");
                break;
            case 'Ö':
            case 'Ü':
            case 'İ':
            case 'E':
                System.out.println("kalın sesli harf");
                break;
            default:
                System.out.println("farklı bir harf giriniz");

        }
    }
}
