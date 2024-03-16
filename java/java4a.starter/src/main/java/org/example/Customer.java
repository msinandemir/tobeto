package org.example;


// DRY => DONT REPEAT YOURSELF

// Inheritance - Kalıtım, Miras
public class Customer extends User{
    public Customer() {
        super();
    }
    public Customer(String name, String surname, String email, String password, int age, String customerNo) {
        super(name, surname, email, password, age);
        this.customerNo = customerNo;
    }

    private  String customerNo;

    public String getCustomerNo() {
        return customerNo;
    }

    public void setCustomerNo(String customerNo) {
        this.customerNo = customerNo;
    }
}
