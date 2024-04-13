package org.example.d11.interfaces;

public class MySqlCustomerDal implements ICustomerDal, IRepository{
    @Override
    public void add() {
        System.out.println("My sql eklendi");
    }
}
