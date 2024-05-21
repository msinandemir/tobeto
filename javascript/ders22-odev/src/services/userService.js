"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = require("../data/users");
const dataError_1 = require("../models/dataError");
class UserService {
    constructor(loggerSercie) {
        this.employees = [];
        this.customers = [];
        this.errors = [];
        this.loggerService = loggerSercie;
    }
    load() {
        for (const user of users_1.users) {
            switch (user.type) {
                case "customer":
                    if (!this.checkCustomerValidityForErrors(user)) {
                        this.customers.push(user);
                    }
                    break;
                case "employee":
                    if (!this.checkEmployeeValidityForErrors(user)) {
                        this.employees.push(user);
                    }
                    break;
                default:
                    this.errors.push(new dataError_1.default("Wrong user", user));
                    break;
            }
        }
    }
    checkCustomerValidityForErrors(user) {
        let hasErrors = false;
        const requiredFields = [
            "id",
            "firstName",
            "lastName",
            "age",
            "city",
        ];
        for (const field of requiredFields) {
            if (!user[field]) {
                hasErrors = true;
                this.errors.push(new dataError_1.default(`Validation problem. ${field} is required`, user));
            }
        }
        return hasErrors;
    }
    checkEmployeeValidityForErrors(user) {
        let hasErrors = false;
        const requiredFields = [
            "id",
            "firstName",
            "lastName",
            "age",
            "city",
            "salary",
        ];
        for (const field of requiredFields) {
            if (!user[field]) {
                hasErrors = true;
                this.errors.push(new dataError_1.default(`Validation problem. ${field} is required`, user));
            }
        }
        if (Number.isNaN(Number(+user.age))) {
            hasErrors = true;
            this.errors.push(new dataError_1.default(`Validation problem. ${user.age} is not a number`, user));
        }
        return hasErrors;
    }
    add(user) {
        switch (user.type) {
            case "customer":
                if (!this.checkCustomerValidityForErrors(user)) {
                    this.customers.push(user);
                }
                break;
            case "employee":
                if (!this.checkEmployeeValidityForErrors(user)) {
                    this.employees.push(user);
                }
                break;
            default:
                this.errors.push(new dataError_1.default("This user can not be added. Wrong user type", user));
                break;
        }
    }
    listCustomers() {
        return this.customers;
    }
    listEmployees() {
        return this.employees;
    }
    getCustomerById(id) {
        console.log("user getirildi");
        let index = this.customers.findIndex((user) => user.id === id);
        return this.customers[index];
    }
    getEmployeeById(id) {
        console.log("user getirildi");
        let index = this.employees.findIndex((user) => user.id === id);
        return this.employees[index];
    }
    getCustomerSorted() {
        return this.customers.sort((customer1, customer2) => {
            if (customer1.firstName < customer2.firstName) {
                return -1;
            }
            else if (customer1.firstName === customer2.firstName) {
                return 0;
            }
            else
                return 1;
        });
    }
}
exports.default = UserService;
