package org.example.concretes;

import org.example.abstracts.CustomerCheckService;
import org.example.entities.Customer;

public class CustomerCheckServiceImpl implements CustomerCheckService {
    @Override
    public boolean checkIfRealPerson(Customer customer) {
        return true;
    }
}
