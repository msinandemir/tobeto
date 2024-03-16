package org.example;


public class EmailLogger extends BaseLogger {
    @Override
    public void log(String message) {
        System.out.println("E-postaya loglandı:" + message);
    }
}
