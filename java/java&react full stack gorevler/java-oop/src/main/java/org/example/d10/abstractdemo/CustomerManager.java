package org.example.d10.abstractdemo;

public class CustomerManager {
    public BaseDatabaseManager databaseManager;

    public void getCustomers(){
        databaseManager.getData();
    }
}
