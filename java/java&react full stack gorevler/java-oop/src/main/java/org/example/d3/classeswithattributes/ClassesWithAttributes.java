package org.example.d3.classeswithattributes;

public class ClassesWithAttributes {

    public static void main(String[] args) {
       /* Product product = new Product(1,"Laptop","Asus laptop",5000,3,"kırmızı");*/
        Product product = new Product();
        product.setName("laptop");
        product.setId(1);
        product.setDescription("Asus Laptop");
        product.setPrice(5000);
        product.setStockAmount(3);
        product.setRenk("");


        ProductManager productManager = new ProductManager();
        productManager.add(product);
        System.out.println(product.getName());
        System.out.println(product.getKod());

    }
}
