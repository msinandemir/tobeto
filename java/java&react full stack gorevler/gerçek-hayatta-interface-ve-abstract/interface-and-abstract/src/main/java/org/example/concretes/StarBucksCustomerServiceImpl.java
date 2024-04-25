package org.example.concretes;

import org.example.abstracts.BaseCustomerManager;
import org.example.abstracts.CustomerCheckService;
import org.example.entities.Customer;

public class StarBucksCustomerServiceImpl extends BaseCustomerManager {

    private final CustomerCheckService customerCheckService;

    public StarBucksCustomerServiceImpl(CustomerCheckService customerCheckService) {
        this.customerCheckService = customerCheckService;
    }

    @Override
    public void save(Customer customer) throws Exception {
        boolean result = customerCheckService.checkIfRealPerson(customer);
        if (result)
            super.save(customer);
        else
            throw new RuntimeException("Not a valid person!");
    }


}
