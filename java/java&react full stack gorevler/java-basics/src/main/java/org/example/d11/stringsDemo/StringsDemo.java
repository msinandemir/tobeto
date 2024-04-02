package org.example.d11.stringsDemo;

import java.util.Locale;

public class StringsDemo {
    public static void main(String[] args) {

        String mesaj = "bugün hava çok güzel.";
        System.out.println(mesaj);

        System.out.println(mesaj.length());
        System.out.println("5. eleman : " + mesaj.charAt(4));
        System.out.println(mesaj.concat(" Yaşasın"));
        System.out.println(mesaj.startsWith("A"));
        System.out.println(mesaj.endsWith("."));
        char[] chars = new char[5];
        mesaj.getChars(0,5,chars,0);
        System.out.println(chars);
        System.out.println(mesaj.indexOf("a"));
        System.out.println(mesaj.lastIndexOf("a"));


        String yeniMesaj = mesaj.replace(" ", "-");
        System.out.println(yeniMesaj);
        System.out.println(mesaj.substring(2,4)); // 2 dahil 4 değil

        for(String kelime: mesaj.split(" ")){
            System.out.println(kelime);
        }

        System.out.println(mesaj.toLowerCase());
        System.out.println(mesaj.toUpperCase());
        System.out.println(mesaj.trim());
    }
}
