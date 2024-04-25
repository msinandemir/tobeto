package org.example.adapters;

import org.example.abstracts.CustomerCheckService;
import org.example.entities.Customer;
import org.example.mernis.LUIKPSPublicSoap;

public class MernisServiceAdapter implements CustomerCheckService {
    @Override
    public boolean checkIfRealPerson(Customer customer) throws Exception {
        LUIKPSPublicSoap client = new LUIKPSPublicSoap();
        return client.TCKimlikNoDogrula(Long.valueOf(customer.getNationalityId()), customer.getFirstName().toUpperCase(), customer.getLastName().toUpperCase(), customer.getDateOfBirth().getYear());
    }
}
