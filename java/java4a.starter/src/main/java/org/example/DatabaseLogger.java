package org.example;

public class DatabaseLogger extends BaseLogger {
    @Override
    public void log(String message) {
        System.out.println("DB'a loglandı:" + message);
    }
}
