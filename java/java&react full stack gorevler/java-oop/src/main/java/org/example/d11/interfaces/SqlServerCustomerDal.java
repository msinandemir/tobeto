package org.example.d11.interfaces;

public class SqlServerCustomerDal implements ICustomerDal{
    @Override
    public void add() {
        System.out.println("Sql Server eklendi");
    }
}
