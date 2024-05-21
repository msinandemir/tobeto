import { BaseLogger } from "../crossCuttingConcerns/logging/logger";
import { users } from "../data/users";
import User from "../models/User";
import DataError from "../models/dataError";

export default class UserService {
  employees: User[] = [];
  customers: User[] = [];
  errors: DataError[] = [];
  loggerService: BaseLogger;
  constructor(loggerSercie: BaseLogger) {
    this.loggerService = loggerSercie;
  }

  load() {
    for (const user of users) {
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
          this.errors.push(new DataError("Wrong user", user));
          break;
      }
    }
  }

  checkCustomerValidityForErrors(user: User): boolean {
    let hasErrors: boolean = false;
    const requiredFields: string[] = [
      "id",
      "firstName",
      "lastName",
      "age",
      "city",
    ];
    for (const field of requiredFields) {
      if (!user[field]) {
        hasErrors = true;
        this.errors.push(
          new DataError(`Validation problem. ${field} is required`, user)
        );
      }
    }
    return hasErrors;
  }
  checkEmployeeValidityForErrors(user: User): boolean {
    let hasErrors: boolean = false;
    const requiredFields: string[] = [
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
        this.errors.push(
          new DataError(`Validation problem. ${field} is required`, user)
        );
      }
    }

    if (Number.isNaN(Number(+user.age))) {
      hasErrors = true;
      this.errors.push(
        new DataError(`Validation problem. ${user.age} is not a number`, user)
      );
    }
    return hasErrors;
  }

  add(user: User): void {
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
        this.errors.push(
          new DataError("This user can not be added. Wrong user type", user)
        );
        break;
    }
  }

  listCustomers(): User[] {
    return this.customers;
  }
  listEmployees(): User[] {
    return this.employees;
  }

  getCustomerById(id: number): User {
    console.log("user getirildi");
    let index: number = this.customers.findIndex((user) => user.id === id);
    return this.customers[index];
  }
  getEmployeeById(id: number): User {
    console.log("user getirildi");
    let index: number = this.employees.findIndex((user) => user.id === id);
    return this.employees[index];
  }

  getCustomerSorted(): User[] {
    return this.customers.sort((customer1, customer2) => {
      if (customer1.firstName < customer2.firstName) {
        return -1;
      } else if (customer1.firstName === customer2.firstName) {
        return 0;
      } else return 1;
    });
  }
}
