package org.example.d7.polymorphismdemo;

public class EmailLogger extends BaseLogger{
    public void log(String message){
        System.out.println("Logged to email : " + message);
    }
}
