package org.example.d13.staticdemo;

public class StaticDemo {
    public static void main(String[] args) {
        Product product = new Product();
        product.id = 1;
        product.name = "Laptop";
        product.price = 3500;
    ProductManager productManager = new ProductManager();
    productManager.add(product);

    DatabaseHelper.Connection.connect();
    }
}
