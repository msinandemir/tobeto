"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("../crossCuttingConcerns/logging/logger");
const User_1 = require("../models/User");
const customer_1 = require("../models/customer");
const userService_1 = require("../services/userService");
console.log("user component");
const user1 = new User_1.default(1, "sinan", "demir", "istanbul", 26, "customer");
const user2 = new User_1.default(1, "sinan", "demir", "istanbul", 26, "employee");
const logger = new logger_1.ElasticLogger;
const userService = new userService_1.default(logger);
userService.add(user1);
userService.add(user2);
// console.log(userService.list());
// console.log(userService.getById(1));
userService.load();
const customerToAdd = new customer_1.default(1, "sinan", "demir", "istanbul", 26, "customer", "12312123");
userService.add(customerToAdd);
console.log(userService.customers);
console.log(userService.employees);
console.log(userService.errors);
console.log(userService.getCustomerSorted());
