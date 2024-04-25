package org.example.abstracts;

import org.example.entities.Customer;

public interface CustomerCheckService {

    boolean checkIfRealPerson(Customer customer) throws Exception;
}
