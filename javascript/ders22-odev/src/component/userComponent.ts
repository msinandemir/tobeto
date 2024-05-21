import { BaseLogger, ElasticLogger } from "../crossCuttingConcerns/logging/logger";
import User from "../models/User";
import Customer from "../models/customer";
import UserService from "../services/userService";

console.log("user component");

const user1 = new User(1, "sinan", "demir", "istanbul",26,"customer");
const user2 = new User(1, "sinan", "demir", "istanbul",26,"employee");
const logger = new ElasticLogger
const userService = new UserService(logger);

userService.add(user1);
userService.add(user2);

// console.log(userService.list());

// console.log(userService.getById(1));

userService.load()
const customerToAdd:Customer = new Customer(1, "sinan", "demir", "istanbul",26,"customer","12312123")
userService.add(customerToAdd)
console.log(userService.customers);
console.log(userService.employees);
console.log(userService.errors);
console.log(userService.getCustomerSorted());

