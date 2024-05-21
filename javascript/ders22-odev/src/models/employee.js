"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("./User");
class Employee extends User_1.default {
    constructor(id, firstName, lastName, city, age, salary, type) {
        super(id, firstName, lastName, city, age, type);
        this.salary = salary;
    }
}
exports.default = Employee;
