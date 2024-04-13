package org.example.d11.interfaces;

public class OracleCustomerDal implements ICustomerDal{
    @Override
    public void add() {
        System.out.println("Oracle eklendi");
    }
}
