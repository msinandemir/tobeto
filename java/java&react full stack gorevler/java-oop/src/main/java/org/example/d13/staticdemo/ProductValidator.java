package org.example.d13.staticdemo;

public class ProductValidator {

    static {
        System.out.println("static yapıcı blok çalıştı");
    }

    public ProductValidator() {
        System.out.println("yapıcı blok çalıştı");
    }

    public static boolean isValid(Product product) {
        return product.price > 0 && !product.name.isEmpty();
    }

    public void bisey() {

    }

}
