package org.example.d3.classeswithattributes;

public class ClassesWithAttributes {

    public static void main(String[] args) {
        Product product = new Product();
        product.name = "laptop";
        product.id = 1;
        product.description = "Asus Laptop";
        product.price = 5000;
        product.stockAmount = 3;

        ProductManager productManager = new ProductManager();
        productManager.add(product);
        System.out.println(product.name);

    }
}