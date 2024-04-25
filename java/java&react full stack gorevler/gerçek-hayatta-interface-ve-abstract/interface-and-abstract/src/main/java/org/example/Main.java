package org.example;

import org.example.abstracts.BaseCustomerManager;
import org.example.adapters.MernisServiceAdapter;
import org.example.concretes.NeroCustomerServiceImpl;
import org.example.concretes.StarBucksCustomerServiceImpl;
import org.example.entities.Customer;

import java.util.Date;

public class Main {
    public static void main(String[] args) throws Exception {

        BaseCustomerManager customerManager = new StarBucksCustomerServiceImpl(new MernisServiceAdapter());
        Customer customer = new Customer();
        customer.setFirstName("muhammed sinan");
        customer.setLastName("demir");
        customer.setDateOfBirth(new Date(1998,3,10));
        customer.setNationalityId("11111111111");
        customerManager.save(customer);
    }
}