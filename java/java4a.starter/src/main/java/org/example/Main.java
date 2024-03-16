package org.example;

public class Main {
    public static void main(String[] args) {

        // instance
        Product product = new Product("Laptop",35000,10);
        //product.setName("laptop");
        //product.setUnitPrice(35000);
        //product.setStock(10);


        Product product2 = new Product("Klavye",350,50);
        //product2.setName("Klavye");
        //product2.setUnitPrice(350);
        //product2.setStock(50);


        System.out.println(product.getName());


        Customer customer = new Customer();
        customer.setName("customer1");

        BaseLogger logger = new FileLogger();
        logger.baseLog("veri");

        // O => open/closed principle
        // SOLID => 5 adet clean code geliştirme
        // DRY =>  DON'T REPEAT YOURSELF
    }
}