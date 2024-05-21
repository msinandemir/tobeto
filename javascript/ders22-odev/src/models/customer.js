"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_js_1 = require("./User.js");
class Customer extends User_js_1.default {
    constructor(id, firstName, lastName, city, age, type, creditCardNumber) {
        super(id, firstName, lastName, city, age, type);
        this.creditCardNumber = creditCardNumber;
    }
}
exports.default = Customer;
