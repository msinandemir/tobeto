package org.example.d7.polymorphismdemo;

public class CustomerManager {
    private final BaseLogger logger;

    public CustomerManager(BaseLogger logger) {
        this.logger = logger;
    }

    public void add() {
        System.out.println("müşteri eklendi");
        logger.log("log mesajı");
    }
}
