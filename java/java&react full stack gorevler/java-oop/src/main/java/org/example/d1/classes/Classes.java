package org.example.d1.classes;

public class Classes {

    public static void main(String[] args) {
        // claslar referans tiptir(reference type)
        CustomerManager customerManager = new CustomerManager();
        CustomerManager customerManager1 = new CustomerManager();
        customerManager = customerManager1;
        customerManager.add();
        customerManager.remove();
        customerManager.update();

        // value type
        int sayi1 = 10;
        int sayi2 = 20;
        sayi2=sayi1;
        sayi1=30;
        System.out.println(sayi2); // => 10

        // reference type
        int[] sayilar1 = new int[]{1,2,3};
        int[] sayilar2 = new int[]{4,5,6};
        sayilar2=sayilar1;
        sayilar1[0] = 10;
        System.out.println(sayilar2[0]); // => 10
    }
}
