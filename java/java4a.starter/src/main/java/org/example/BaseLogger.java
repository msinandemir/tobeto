package org.example;

public abstract class BaseLogger implements Logger{
    public void baseLog(String message){
        System.out.println("Loglama başlıyor..");
        log(message);
        System.out.println("Loglama bitti..");
    }
}
