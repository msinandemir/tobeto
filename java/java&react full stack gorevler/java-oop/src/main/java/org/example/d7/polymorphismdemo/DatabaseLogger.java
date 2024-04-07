package org.example.d7.polymorphismdemo;

public class DatabaseLogger extends BaseLogger{
    public void log(String message){
        System.out.println("Logged to database : " + message);
    }
}
