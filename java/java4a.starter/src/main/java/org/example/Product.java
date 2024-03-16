package org.example;

// OOP CONCEPTS
public class Product {

    // Constructor - Yapıcı blok
    /*
     Bir class hiçbir constructor içermiyorsa boş constructor otomatik tanımlıdır.
     */

    public Product() {
    }

    public Product(String name, double unitPrice, int stock) {
        System.out.println("Constructor çalıştı");
        this.name = name;
        this.unitPrice = unitPrice;
        this.stock = stock;
    }


    private String name;
    private double unitPrice;
    private int stock;


// Encapsulation - Kapsülleme

    public String getName() {
        return name;
    }

    public void setName(String name) {
        if (name.length() < 3)
            return;
        this.name = name; // this => classın kendisini ifade eder.
    }

    public double getUnitPrice() {
        return unitPrice;
    }

    public void setUnitPrice(double unitPrice) {
        this.unitPrice = unitPrice;
    }

    public int getStock() {
        return stock;
    }

    public void setStock(int stock) {
        this.stock = stock;
    }
}
