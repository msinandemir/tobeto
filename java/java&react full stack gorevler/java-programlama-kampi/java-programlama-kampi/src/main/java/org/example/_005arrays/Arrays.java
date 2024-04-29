package org.example._005arrays;

public class Arrays {
    public static void main(String[] args) {
        String[] sehirler = new String[]{"Ankara","İstanbul","İzmir"};

        for(String sehir: sehirler){
            System.out.println(sehir);
        }

        for (int i = 0; i < sehirler.length; i++){
            System.out.println(sehirler[i]);
        }
    }

}
